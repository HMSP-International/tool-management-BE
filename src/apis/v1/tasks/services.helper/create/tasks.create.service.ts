import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskModel, TaskDocument } from '../../classes/task.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as TaskDto from '../../classes/tasks.dto';
import { ListsService } from 'apis/v1/lists/lists.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';

@Injectable()
export class TasksCreateService {
	constructor (
		@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		@Inject(forwardRef(() => PaticipantsService))
		private readonly paticipantsService: PaticipantsService,
	) {}

	async createTask (getTasksInput: TaskDto.CreateTaskInput, user: IPayLoadToken): Promise<TaskDocument> {
		const { _listId, name, assignee, descriptions } = getTasksInput;
		// check _listId
		const list = await this.listsService.findById(_listId);

		// check project
		let count = 0;
		const project = await this.projectsService.findById(list._projectId);
		if (project.owner.toString() !== user._id) count++;

		// check admin in paticipants
		const paticipant = await this.paticipantsService.findPaticipantByProjectAndMember(
			{ _projectId: project._id },
			user,
			true,
		);
		if (!paticipant || (paticipant && paticipant.role === 'member')) count++;

		if (count === 2) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

		const order = await this.taskEntity.countDocuments({ _listId });

		const newTask = new this.taskEntity({
			_listId,
			name,
			assignee,
			_projectId: project._id,
			reporter: user._id,
			order,
			descriptions,
			stt: project.stt + 1,
			estimatedTime: [ { _listId: _listId, totalTime: 0, lastTime: Date() } ],
		});

		this.projectsService.updateStt({ stt: project.stt + 1, _projectId: project._id.toString() });
		return await newTask.save();
	}
}

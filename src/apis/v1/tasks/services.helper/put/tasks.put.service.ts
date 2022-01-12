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
export class TasksPutService {
	constructor (
		@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		@Inject(forwardRef(() => PaticipantsService))
		private readonly paticipantsService: PaticipantsService,
	) {}

	async checkPermistion (task: TaskDocument, user: IPayLoadToken) {
		const list = await this.listsService.findById(task._listId);

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
		if (paticipant === null || paticipant.role === 'member') count++;
		if (count === 2) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
	}

	async changeTaskName (getTasksInput: TaskDto.ChangeTaskNameInput, user: IPayLoadToken): Promise<TaskDocument> {
		const { _taskId, name } = getTasksInput;
		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}
		// check permissions
		this.checkPermistion(task, user);

		return await this.taskEntity.findByIdAndUpdate(_taskId, { name }, { new: true });
	}

	async changeAssignee (
		changeAssigneeInput: TaskDto.ChangeAssigneeInput,
		user: IPayLoadToken,
	): Promise<TaskDocument> {
		const { _taskId, assignee } = changeAssigneeInput;
		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}

		// check permissions
		this.checkPermistion(task, user);

		return await this.taskEntity.findByIdAndUpdate(_taskId, { assignee }, { new: true });
	}

	async changeDescriptions (
		changeAssigneeInput: TaskDto.ChangeDescriptionsInput,
		user: IPayLoadToken,
	): Promise<TaskDocument> {
		const { _taskId, descriptions } = changeAssigneeInput;
		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}

		// check permissions
		this.checkPermistion(task, user);

		return await this.taskEntity.findByIdAndUpdate(_taskId, { descriptions }, { new: true });
	}

	async changeListOfTask (
		changeListOfTaskInput: TaskDto.ChangeListOfTaskInput,
		user: IPayLoadToken,
	): Promise<TaskDocument> {
		const { _taskId, _listId } = changeListOfTaskInput;

		const task = await this.taskEntity.findById(_taskId);
		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}

		// check permissions
		const list = await this.listsService.findById(task._listId);
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
		if (paticipant === null) count++;
		if (count === 2) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

		return await this.taskEntity.findByIdAndUpdate(_taskId, { _listId }, { new: true });
	}
}

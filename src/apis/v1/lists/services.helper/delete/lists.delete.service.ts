import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListModel, ListDocument } from '../../classes/list.model';

import { TasksService } from 'apis/v1/tasks/tasks.service';
import { ListsPutService } from '../put/lists.put.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { ProjectsService } from 'apis/v1/projects/projects.service';

@Injectable()
export class ListsDeleteService {
	constructor (
		@InjectModel(ListModel.name) private listEntity: Model<ListDocument>,
		@Inject(forwardRef(() => TasksService))
		private readonly tasksService: TasksService,
		private readonly listsPutService: ListsPutService,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
	) {}

	async deleteListById (_listId: string, user: IPayLoadToken): Promise<ListDocument> {
		const list = await this.listEntity.findById(_listId);
		if (list === null) {
			throw new HttpException('Not Found _listId', HttpStatus.BAD_REQUEST);
		}

		const project = await this.projectsService.findById(list._projectId);
		if (project.owner.toString() !== user._id) {
			throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
		}

		// delete tasks of this list
		this.tasksService.deleteTasksByListId(_listId);

		// then delete list
		const listDeleted = await this.listEntity.findByIdAndDelete(_listId);

		this.listsPutService.resetListOrder(listDeleted._projectId);

		return listDeleted;
	}

	async deleteByProjectId (_projectId: string, user: IPayLoadToken): Promise<void> {
		const lists = await this.listEntity.find({ _projectId });

		// delete lists
		for (let list of lists) {
			this.deleteListById(list._id, user);
		}

		this.listsPutService.resetListOrder(_projectId);
	}
}

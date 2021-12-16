import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListModel, ListDocument } from '../../classes/list.model';

import { List } from '../../classes/list.entity';

import { TasksService } from '../../../tasks/tasks.service';
import { ListsPutService } from '../put/lists.put.service';

@Injectable()
export class ListsDeleteService {
	constructor (
		@InjectModel(ListModel.name) private listEntity: Model<ListDocument>,
		@Inject(forwardRef(() => TasksService))
		private readonly tasksService: TasksService,
		private readonly listsPutService: ListsPutService,
	) {}

	async deleteListById (_listId: string): Promise<List> {
		// delete tasks of this list
		this.tasksService.deleteTasksByListId(_listId);

		// then delete list
		const listDeleted = await this.listEntity.findByIdAndDelete(_listId);
		if (listDeleted === null) {
			throw new HttpException('Not Found _listId', HttpStatus.BAD_REQUEST);
		}

		this.listsPutService.resetListOrder(listDeleted._projectId);

		return listDeleted;
	}

	async deleteByProjectId (_projectId: string): Promise<void> {
		const lists = await this.listEntity.find({ _projectId });

		// delete lists
		for (let list of lists) {
			this.deleteListById(list._id);
		}

		this.listsPutService.resetListOrder(_projectId);
	}
}

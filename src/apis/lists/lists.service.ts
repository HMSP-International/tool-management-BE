import { HttpException, HttpStatus, Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectsService } from '../projects/projects.service';
import { TasksService } from '../tasks/tasks.service';
import { List } from './list.entity';
import { ListDocument, ListModel } from './list.model';
import * as ListDTO from './lists.dto';

@Injectable()
export class ListsService {
	constructor (
		@InjectModel(ListModel.name) private listEntity: Model<ListDocument>,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		@Inject(forwardRef(() => TasksService))
		private readonly tasksService: TasksService,
	) {}

	async create (createListInput: ListDTO.CreateListInput): Promise<List> {
		const { _projectId } = createListInput;

		await this.projectsService.findById(_projectId);

		const order = await this.listEntity.countDocuments({ _projectId });

		const newList = new this.listEntity({ order, ...createListInput });

		return await newList.save();
	}

	async getLists (getListsInput: ListDTO.GetListsInput): Promise<ListDocument[]> {
		const { _projectId } = getListsInput;

		await this.projectsService.findById(_projectId);

		return await this.listEntity.find({ _projectId }).sort('order');
	}

	async findById (_id: string): Promise<ListDocument | null> {
		const list = await this.listEntity.findById(_id);

		if (list === null) {
			throw new HttpException('Not Found _listId', HttpStatus.BAD_REQUEST);
		}

		return list;
	}

	async resetListOrder (_projectId: string): Promise<void> {
		const lists = await this.listEntity.find({ _projectId }).sort('order');

		for (let i = 0; i < lists.length; i++) {
			lists[i].order = i;
			await lists[i].save();
		}
	}

	async deleteListById (_listId: string): Promise<List> {
		// delete tasks of this list
		this.tasksService.deleteTasksByListId(_listId);

		// then delete list
		const listDeleted = await this.listEntity.findByIdAndDelete(_listId);
		if (listDeleted === null) {
			throw new HttpException('Not Found _listId', HttpStatus.BAD_REQUEST);
		}

		this.resetListOrder(listDeleted._projectId);

		return listDeleted;
	}

	async deleteByProjectId (_projectId: string): Promise<void> {
		const lists = await this.listEntity.find({ _projectId });

		// delete lists
		for (let list of lists) {
			this.deleteListById(list._id);
		}

		this.resetListOrder(_projectId);
	}
}

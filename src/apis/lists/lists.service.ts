import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectsService } from '../projects/projects.service';
import { List } from './list.entity';
import { ListDocument, ListModel } from './list.model';
import * as ListDTO from './lists.dto';

@Injectable()
export class ListsService {
	constructor (
		@InjectModel(ListModel.name) private listEntity: Model<ListDocument>,
		private readonly projectsService: ProjectsService,
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

		return await this.listEntity.find({ _projectId });
	}

	async findById (_id: string): Promise<ListDocument | null> {
		const list = await this.listEntity.findById(_id);

		if (list === null) {
			throw new HttpException('Not Found _listId', HttpStatus.BAD_REQUEST);
		}

		return list;
	}

	async deleteLists (deleteListsInput: ListDTO.DeleteListsInput): Promise<List[]> {
		const { _listIds } = deleteListsInput;

		// check _listId
		const arrayPromise = [];
		_listIds.forEach(_id => {
			const listDeleted = this.listEntity.findByIdAndDelete(_id);

			if (listDeleted) {
				arrayPromise.push(listDeleted);
			}
		});

		return await Promise.all(arrayPromise);
	}
}

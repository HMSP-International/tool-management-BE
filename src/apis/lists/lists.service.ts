import { Injectable } from '@nestjs/common';
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
}

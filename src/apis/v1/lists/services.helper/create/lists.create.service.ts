import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListModel, ListDocument } from '../../classes/list.model';

import * as ListDTO from '../../classes/lists.dto';
import { List } from '../../classes/list.entity';

import { ProjectsService } from '../../../projects/projects.service';

@Injectable()
export class ListsCreateService {
	constructor (
		@InjectModel(ListModel.name) private listEntity: Model<ListDocument>,
		@Inject(forwardRef(() => ProjectsService))
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

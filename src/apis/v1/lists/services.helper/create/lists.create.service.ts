import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListModel, ListDocument } from '../../classes/list.model';
import * as ListDTO from '../../classes/lists.dto';

import { ProjectsService } from 'apis/v1/projects/projects.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Injectable()
export class ListsCreateService {
	constructor (
		@InjectModel(ListModel.name) private listEntity: Model<ListDocument>,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
	) {}

	async create (createListInput: ListDTO.CreateListInput, user: IPayLoadToken): Promise<ListDocument> {
		const { _projectId } = createListInput;

		const project = await this.projectsService.findById(_projectId);
		if (project.owner.toString() !== user._id) {
			throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
		}

		const order = await this.listEntity.countDocuments({ _projectId });

		const newList = new this.listEntity({ order, ...createListInput });

		return await newList.save();
	}
}

import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListModel, ListDocument } from '../../classes/list.model';

import * as ListDTO from '../../classes/lists.dto';

import { ProjectsService } from 'apis/v1/projects/projects.service';

@Injectable()
export class ListsFindService {
	constructor (
		@InjectModel(ListModel.name) private listEntity: Model<ListDocument>,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
	) {}

	async findAllByProjectId (getListsInput: ListDTO.GetListsInput): Promise<ListDocument[]> {
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
}

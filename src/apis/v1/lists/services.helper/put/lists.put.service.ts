import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as ListDTO from '../../classes/lists.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListModel, ListDocument } from '../../classes/list.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { ProjectsService } from 'apis/v1/projects/projects.service';

@Injectable()
export class ListsPutService {
	constructor (
		@InjectModel(ListModel.name) private listEntity: Model<ListDocument>,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
	) {}

	async resetListOrder (_projectId: string): Promise<void> {
		const lists = await this.listEntity.find({ _projectId }).sort('order');

		for (let i = 0; i < lists.length; i++) {
			lists[i].order = i;
			await lists[i].save();
		}
	}

	async changeNameList ({ name, _listId }: ListDTO.ChangeNameListInput, user: IPayLoadToken): Promise<ListDocument> {
		const list = await this.listEntity.findById(_listId);
		if (list === null) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

		const project = await this.projectsService.findById(list._projectId);
		if (project.owner.toString() !== user._id) {
			throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
		}

		const listEdited = await this.listEntity.findByIdAndUpdate(_listId, { name }, { new: true });

		return listEdited;
	}
}

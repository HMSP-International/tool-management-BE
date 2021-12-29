import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as ListDTO from '../../classes/lists.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListModel, ListDocument } from '../../classes/list.model';

@Injectable()
export class ListsPutService {
	constructor (@InjectModel(ListModel.name) private listEntity: Model<ListDocument>) {}

	async resetListOrder (_projectId: string): Promise<void> {
		const lists = await this.listEntity.find({ _projectId }).sort('order');

		for (let i = 0; i < lists.length; i++) {
			lists[i].order = i;
			await lists[i].save();
		}
	}

	async changeNameList ({ name, _listId }: ListDTO.ChangeNameListInput): Promise<ListDocument> {
		const list = await this.listEntity.findByIdAndUpdate(_listId, { name }, { new: true });

		if (list === null) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

		return list;
	}
}

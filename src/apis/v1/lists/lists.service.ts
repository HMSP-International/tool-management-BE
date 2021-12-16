import { Injectable } from '@nestjs/common';
import { ListDocument } from './classes/list.model';

import * as ListDTO from './classes/lists.dto';
import { List } from './classes/list.entity';

import { ListsCreateService } from './services.helper/create/lists.create.service';
import { ListsDeleteService } from './services.helper/delete/lists.delete.service';
import { ListsFindService } from './services.helper/find/lists.find.service';

@Injectable()
export class ListsService {
	constructor (
		private readonly listsCreateService: ListsCreateService,
		private readonly listsDeleteService: ListsDeleteService,
		private readonly listsFindService: ListsFindService,
	) {}

	async create (createListInput: ListDTO.CreateListInput): Promise<List> {
		return await this.listsCreateService.create(createListInput);
	}

	async findAllByProjectId (getListsInput: ListDTO.GetListsInput): Promise<ListDocument[]> {
		return await this.listsFindService.findAllByProjectId(getListsInput);
	}

	async findById (_id: string): Promise<ListDocument | null> {
		return await this.listsFindService.findById(_id);
	}

	async deleteListById (_listId: string): Promise<List> {
		return await this.listsDeleteService.deleteListById(_listId);
	}

	async deleteByProjectId (_projectId: string): Promise<void> {
		return await this.listsDeleteService.deleteByProjectId(_projectId);
	}
}

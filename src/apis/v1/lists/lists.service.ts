import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as ListDTO from './classes/lists.dto';

import { ListsCreateService } from './services.helper/create/lists.create.service';
import { ListsDeleteService } from './services.helper/delete/lists.delete.service';
import { ListsFindService } from './services.helper/find/lists.find.service';
import { ListsPutService } from './services.helper/put/lists.put.service';

@Injectable()
export class ListsService {
	constructor (
		private readonly listsCreateService: ListsCreateService,
		private readonly listsDeleteService: ListsDeleteService,
		private readonly listsFindService: ListsFindService,
		private readonly listsPutService: ListsPutService,
	) {}

	async create (createListInput: ListDTO.CreateListInput, user: IPayLoadToken) {
		return await this.listsCreateService.create(createListInput, user);
	}

	async findAllByProjectId (getListsInput: ListDTO.GetListsInput) {
		return await this.listsFindService.findAllByProjectId(getListsInput);
	}

	async findById (_id: string) {
		return await this.listsFindService.findById(_id);
	}

	async deleteListById (_listId: string, user: IPayLoadToken) {
		return await this.listsDeleteService.deleteListById(_listId, user);
	}

	async deleteByProjectId (_projectId: string, user: IPayLoadToken) {
		return await this.listsDeleteService.deleteByProjectId(_projectId, user);
	}

	async changeNameList (changeNameListInput: ListDTO.ChangeNameListInput, user: IPayLoadToken) {
		return this.listsPutService.changeNameList(changeNameListInput, user);
	}
}

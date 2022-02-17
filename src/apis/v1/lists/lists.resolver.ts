import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ListsService } from './lists.service';
import { List } from './classes/list.entity';
import * as ListDTO from './classes/lists.dto';
import { CurrentUser } from '../../../common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Resolver(() => List)
export class ListsResolver {
	constructor (private readonly listsService: ListsService) {}

	@Mutation(() => List)
	createList (@Args('createListInput') createListInput: ListDTO.CreateListInput, @CurrentUser() user: IPayLoadToken) {
		return this.listsService.create(createListInput, user);
	}

	@Mutation(() => [ List ])
	getLists (@Args('getListsInput') getListsInput: ListDTO.GetListsInput) {
		return this.listsService.findAllByProjectId(getListsInput);
	}

	@Mutation(() => List)
	deleteList (@Args('deleteListInput') deleteListInput: ListDTO.DeleteListInput, @CurrentUser() user: IPayLoadToken) {
		return this.listsService.deleteListById(deleteListInput._listId, user);
	}

	@Mutation(() => List)
	changeNameList (
		@Args('changeNameListInput') changeNameList: ListDTO.ChangeNameListInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.listsService.changeNameList(changeNameList, user);
	}
}

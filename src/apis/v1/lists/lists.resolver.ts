import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ListsService } from './lists.service';
import { List } from './classes/list.entity';
import * as ListDTO from './classes/lists.dto';

@Resolver(() => List)
export class ListsResolver {
	constructor (private readonly listsService: ListsService) {}

	@Mutation(() => List)
	createList (@Args('createListInput') createListInput: ListDTO.CreateListInput) {
		return this.listsService.create(createListInput);
	}

	@Query(() => [ List ])
	getLists (@Args('getListsInput') getListsInput: ListDTO.GetListsInput) {
		return this.listsService.findAllByProjectId(getListsInput);
	}

	@Mutation(() => List)
	deleteList (@Args('deleteListInput') deleteListInput: ListDTO.DeleteListInput) {
		return this.listsService.deleteListById(deleteListInput._listId);
	}
}

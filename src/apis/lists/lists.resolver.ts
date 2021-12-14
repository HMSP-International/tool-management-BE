import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ListsService } from './lists.service';
import { List } from './list.entity';
import * as ListDTO from './lists.dto';

@Resolver(() => List)
export class ListsResolver {
	constructor (private readonly listsService: ListsService) {}

	@Mutation(() => List)
	createList (@Args('createListInput') createListInput: ListDTO.CreateListInput) {
		return this.listsService.create(createListInput);
	}

	@Query(() => [ List ])
	getLists (@Args('getListsInput') getListsInput: ListDTO.GetListsInput) {
		return this.listsService.getLists(getListsInput);
	}

	@Mutation(() => List)
	deleteLists (@Args('deleteListInput') deleteListInput: ListDTO.DeleteListInput) {
		return this.listsService.deleteList(deleteListInput);
	}
}

import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { ListsService } from './lists.service';
import { List } from './list.entity';
import * as ListDTO from './lists.dto';
import { CurrentUser } from '../../common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from '../../helpers/modules/token/token.interface';
import { Project } from '../projects/project.entity';

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
}

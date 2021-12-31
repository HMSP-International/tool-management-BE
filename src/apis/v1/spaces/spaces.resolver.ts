import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpacesService } from './spaces.service';
import { Space } from './classes/space.entity';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CurrentUser } from 'common/decorator/currentUser.decorator';
import * as SpaceDTO from './classes/spaces.dto';

@Resolver(() => Space)
export class SpacesResolver {
	constructor (private readonly spacesService: SpacesService) {}

	// Query ---- start
	@Query(() => [ Space ])
	getSpaces (@CurrentUser() user: IPayLoadToken) {
		return this.spacesService.findAll(user);
	}
	// Query ---- end

	// Mutation ---- start
	@Mutation(() => [ Space ])
	createSpace (
		@CurrentUser() user: IPayLoadToken,
		@Args('createSpaceInput') createSpaceInput: SpaceDTO.CreateSpaceInput,
	) {
		return this.spacesService.create(createSpaceInput.name, user);
	}

	@Mutation(() => Space)
	changeNameSpace (@Args('changeNameSpaceInput') changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput) {
		return this.spacesService.changeName(changeNameSpaceInput);
	}

	@Mutation(() => Space)
	deleteSpaceById (
		@Args('deleteSpaceInput') deleteSpaceInput: SpaceDTO.DeleteSpaceInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.spacesService.deleteSpaceById(deleteSpaceInput._spaceId, user._id);
	}
	// Mutation ---- end
}

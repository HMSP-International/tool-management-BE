import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpacesService } from './spaces.service';
import { Space } from './space.entity';
import { IPayLoadToken } from '../../helpers/modules/token/token.interface';
import { CurrentUser } from '../../common/decorator/currentUser.decorator';
import * as SpaceDTO from './spaces.dto';

@Resolver(() => Space)
export class SpacesResolver {
	constructor (private readonly spacesService: SpacesService) {}

	// Query ---- start
	@Query(() => [ Space ])
	async getSpaces (@CurrentUser() user: IPayLoadToken): Promise<Space[]> {
		return this.spacesService.findAll(user);
	}
	// Query ---- end

	// Mutation ---- start
	@Mutation(() => [ Space ])
	async createSpace (
		@CurrentUser() user: IPayLoadToken,
		@Args('createSpaceInput') createSpaceInput: SpaceDTO.CreateSpaceInput,
	): Promise<Space[]> {
		return this.spacesService.create(createSpaceInput.name, user);
	}
	// Mutation ---- end

	// Mutation ---- start
	@Mutation(() =>  Space )
	async changeNameSpace (
		@CurrentUser() user: IPayLoadToken,
		@Args('changeNameSpaceInput') changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput,
	): Promise<Space> {
		return this.spacesService.changeName(changeNameSpaceInput, user);
	}
	// Mutation ---- end
}

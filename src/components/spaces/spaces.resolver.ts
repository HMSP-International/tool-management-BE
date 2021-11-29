import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpacesService } from './spaces.service';
import { Space } from './space.entity';
import { IPayLoadToken } from '../token/token.interface';
import { CurrentUser } from '../../common/decorator/currentUser.decorator';
import * as SpaceDTO from './space.dto';

@Resolver(() => Space)
export class SpacesResolver {
	constructor (private readonly spacesService: SpacesService) {}

	@Query(() => [ Space ])
	async getSpaces (@CurrentUser() user: IPayLoadToken): Promise<Space[]> {
		return this.spacesService.findAll(user);
	}

	@Mutation(() => [ Space ])
	async createSpace (
		@CurrentUser() user: IPayLoadToken,
		@Args('createSpaceInput') createSpaceInput: SpaceDTO.CreateSpaceInput,
	): Promise<Space[]> {
		return this.spacesService.create(createSpaceInput.name, user);
	}
}

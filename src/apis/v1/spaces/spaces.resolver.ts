import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SpacesService } from './spaces.service';
import { Space } from './classes/space.entity';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CurrentUser } from 'apis/v1/currentUser.decorator';
import * as SpaceDTO from './classes/spaces.dto';
import { CurrentUserOption } from '../currentUser.decoratorOption';

@Resolver(() => Space)
export class SpacesResolver {
	constructor (private readonly spacesService: SpacesService) {}

	// Query ---- start
	@Query(() => [ Space ])
	getSpaces (@CurrentUserOption() user: IPayLoadToken) {
		if (user === null) {
			return this.spacesService.findAll({
				_id: '61c97ada9b22541c404e3dd7',
				_roleId: '61c0251fb7ae1f8f80d7e568',
			});
		}
		else {
			return this.spacesService.findAll(user);
		}
	}

	// Query ---- start
	@Mutation(() => [ Space ])
	getSpacesByEmailViewer () {
		return [];
	}

	@Mutation(() => Space)
	getSpacesByProjectId (@Args('findByProjectId') findByProjectId: SpaceDTO.FindByProjectId) {
		return this.spacesService.findByProjectId(findByProjectId);
	}

	@Mutation(() => [ Space ])
	getSpacesByMemberId (
		@CurrentUser() user: IPayLoadToken,
		@Args('findByMemberId') findByMemberId: SpaceDTO.FindByMemberId,
	) {
		return this.spacesService.findByMemberId(findByMemberId, user);
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

	// @Mutation(() => Space)
	// async addNewViewerToProject (
	// 	@Args('addNewViewerInput') addNewViewer: SpaceDTO.AddNewViewerInput,
	// 	@CurrentUser() user: IPayLoadToken,
	// ) {
	// 	return this.spacesService.addNewViewer(addNewViewer, user);
	// }

	// @Mutation(() => Space)
	// async removeViewerFromProject (
	// 	@Args('removeViewerInput') removeViewer: SpaceDTO.RemoveViewerInput,
	// 	@CurrentUser() user: IPayLoadToken,
	// ) {
	// 	return this.spacesService.removeViewerFromProject(removeViewer, user);
	// }
	// Mutation ---- end
}

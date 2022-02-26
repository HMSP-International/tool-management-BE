import { Resolver, Mutation, Args, Parent, ResolveField, Query } from '@nestjs/graphql';
import { CollaboratorsService } from './collaborators.service';
import { Collaborator } from './classes/collaborator.entity';
import * as CollaboratorDTO from './classes/collaborators.dto';
import { CurrentUser } from '../currentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Space } from 'apis/v1/spaces/classes/space.entity';
import { User } from 'apis/v1/users/classes/user.entity';
import { CurrentUserOption } from '../currentUser.decoratorOption';

@Resolver(() => Collaborator)
export class CollaboratorsResolver {
	constructor (private readonly collaboratorsService: CollaboratorsService) {}

	// Mutation -- start
	@Mutation(() => Collaborator)
	inviteSpace (
		@Args('inviteSpaceInput') createCollaboratorInput: CollaboratorDTO.InviteSpaceInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.collaboratorsService.inviteSpace(createCollaboratorInput, user);
	}

	@Mutation(() => Collaborator)
	verifyInviteSpace (@Args('verifyInviteSpaceInput') verifyInviteSpaceInput: CollaboratorDTO.VerifyInviteSpaceInput) {
		return this.collaboratorsService.verifyInviteSpace(verifyInviteSpaceInput);
	}

	// @Query(() => [ Collaborator ])
	// getInvitedSpaces (@CurrentUser() user: IPayLoadToken) {
	// 	return this.collaboratorsService.findInvitedSpaces(user);
	// }
	@Query(() => [ Collaborator ])
	getInvitedSpaces (@CurrentUserOption() user: IPayLoadToken) {
		if (user === null) {
			return this.collaboratorsService.findInvitedSpaces({
				_id: '6218af3c17c3ddcfb76fb122',
				_roleId: '61c0251fb7ae1f8f80d7e568',
			});
		}
		else {
			return this.collaboratorsService.findInvitedSpaces(user);
		}
	}

	// @Mutation(() => [ Collaborator ])
	// putInvitedSpaces (
	// 	@CurrentUser() user: IPayLoadToken,
	// 	@Args('putInvitedSpaceInput') putInvitedSpaceInput: CollaboratorDTO.PutInvitedSpaceInput,
	// ) {
	// 	return this.collaboratorsService.putInvitedSpaces(user, putInvitedSpaceInput);
	// }

	@Mutation(() => [ Collaborator ])
	findUsersBySpaceId (@Args('findUsersBySpaceId') findUsersBySpaceId: CollaboratorDTO.FindUsersBySpaceId) {
		return this.collaboratorsService.findUsersBySpaceId(findUsersBySpaceId._spaceId);
	}

	@Mutation(() => Collaborator)
	deleteByUserAndSpace (
		@CurrentUser() user: IPayLoadToken,
		@Args('deleteByUserAndSpaceInput') deleteByUserAndSpace: CollaboratorDTO.DeleteByUserAndSpaceInput,
	) {
		return this.collaboratorsService.deleteByMemberAndSpace(deleteByUserAndSpace, user);
	}
	// Mutation ---end

	// ResolveField ---start
	@ResolveField(() => Space)
	_workSpaceId (@Parent() collaborator: Collaborator) {
		return this.collaboratorsService.getSpace(collaborator._workSpaceId);
	}

	@ResolveField(() => User)
	_memberId (@Parent() collaborator: Collaborator) {
		return this.collaboratorsService.getUser(collaborator._memberId);
	}
	// ResolveField ---end
}

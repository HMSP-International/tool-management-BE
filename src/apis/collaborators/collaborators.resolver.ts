import { Resolver, Mutation, Args, Parent, ResolveField, Query } from '@nestjs/graphql';
import { CollaboratorsService } from './collaborators.service';
import { Collaborator } from './collaborator.entity';
import * as CollaboratorDTO from './collaborators.dto';
import { CurrentUser } from '../../common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from '../../helpers/modules/token/token.interface';
import { Space } from '../spaces/space.entity';
import { User } from '../users/user.entity';

@Resolver(() => Collaborator)
export class CollaboratorsResolver {
	constructor (private readonly collaboratorsService: CollaboratorsService) {}

	// mutation
	@Mutation(() => Collaborator)
	inviteSpace (
		@Args('inviteSpaceInput') createCollaboratorInput: CollaboratorDTO.InviteSpaceInput,
		@CurrentUser() user: IPayLoadToken,
	): Promise<Collaborator> {
		return this.collaboratorsService.inviteSpace(createCollaboratorInput, user);
	}

	@Mutation(() => Collaborator)
	verifyInviteSpace (
		@Args('verifyInviteSpaceInput') verifyInviteSpaceInput: CollaboratorDTO.VerifyInviteSpaceInput,
	): Promise<Collaborator> {
		return this.collaboratorsService.verifyInviteSpace(verifyInviteSpaceInput);
	}

	@Query(() => [ Collaborator ])
	getInvitedSpaces (@CurrentUser() user: IPayLoadToken): Promise<Collaborator[]> {
		return this.collaboratorsService.findInvitedSpaces(user);
	}

	@Mutation(() => [ Collaborator ])
	putInvitedSpaces (
		@CurrentUser() user: IPayLoadToken,
		@Args('putInvitedSpaceInput') putInvitedSpaceInput: CollaboratorDTO.PutInvitedSpaceInput,
	): Promise<Collaborator[]> {
		return this.collaboratorsService.putInvitedSpaces(user, putInvitedSpaceInput);
	}

	@Mutation(() => [ Collaborator ])
	findUsersBySpaceId (
		@Args('findUsersBySpaceId') findUsersBySpaceId: CollaboratorDTO.FindUsersBySpaceId,
	): Promise<Collaborator[]> {
		return this.collaboratorsService.findUsersBySpaceId(findUsersBySpaceId._spaceId);
	}

	// ResolveField ---start
	@ResolveField(() => Space)
	_workSpaceId (@Parent() collaborator: Collaborator): Promise<Space> {
		return this.collaboratorsService.getSpace(collaborator._workSpaceId);
	}

	@ResolveField(() => User)
	_memberId (@Parent() collaborator: Collaborator): Promise<User> {
		return this.collaboratorsService.getUser(collaborator._memberId);
	}
	// ResolveField ---end
}

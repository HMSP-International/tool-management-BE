import { Resolver, Mutation, Args, Parent, ResolveField, Query } from '@nestjs/graphql';
import { CollaboratorsService } from './collaborators.service';
import { Collaborator } from './collaborator.entity';
import * as CollaboratorDTO from './collaborators.dto';
import { CurrentUser } from '../../common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from '../token/token.interface';
import { Space } from '../spaces/space.entity';

@Resolver(() => Collaborator)
export class CollaboratorsResolver {
	constructor (private readonly collaboratorsService: CollaboratorsService) {}

	@Mutation(() => Collaborator)
	inviteSpace (
		@Args('inviteSpaceInput') createCollaboratorInput: CollaboratorDTO.InviteSpaceInput,
		@CurrentUser() user: IPayLoadToken,
	): Promise<Collaborator> {
		return this.collaboratorsService.inviteSpace(createCollaboratorInput, user);
	}

	@Mutation(() => Collaborator)
	verifyInviteSpace (
		@Args('verifyInviteSpaceInput')
		verifyInviteSpaceInput: CollaboratorDTO.VerifyInviteSpaceInput,
	): Promise<Collaborator> {
		return this.collaboratorsService.verifyInviteSpace(verifyInviteSpaceInput);
	}

	@Query(() => [ Collaborator ])
	getInvitedSpaces (@CurrentUser() user: IPayLoadToken): Promise<Collaborator[]> {
		return this.collaboratorsService.findInvitedSpaces(user);
	}

	@ResolveField(() => Space)
	_workSpaceId (@Parent() collaborator: Collaborator): Promise<Space> {
		return this.collaboratorsService.getSpace(collaborator._workSpaceId);
	}
}

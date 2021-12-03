import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CollaboratorsService } from './collaborators.service';
import { Collaborator } from './collaborator.entity';
import * as CollaboratorDTO from './collaborators.dto';
import { CurrentUser } from 'src/common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from '../token/token.interface';

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
}

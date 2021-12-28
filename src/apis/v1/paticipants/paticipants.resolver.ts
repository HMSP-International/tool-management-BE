import { Resolver, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Paticipant } from './classes/paticipant.entity';
import { PaticipantsService } from './paticipants.service';
import { IPayLoadToken } from '../../../helpers/modules/token/token.interface';
import { CurrentUser } from '../../../common/decorator/CurrentUser.decorator';
import * as PaticipantDTO from './classes/paticipants.dto';
import { Collaborator } from '../collaborators/classes/collaborator.entity';
import { Project } from '../projects/classes/project.entity';
import { User } from '../users/classes/user.entity';

@Resolver(() => Paticipant)
export class PaticipantsResolver {
	constructor (private readonly paticipantsService: PaticipantsService) {}

	@Mutation(() => User)
	createPaticipant (
		@CurrentUser() user: IPayLoadToken,
		@Args('createPaticipantInput') createPaticipantInput: PaticipantDTO.CreatePaticipantInput,
	) {
		return this.paticipantsService.createPaticipant(createPaticipantInput, user);
	}

	@Mutation(() => Paticipant)
	deletePaticipant (
		@CurrentUser() user: IPayLoadToken,
		@Args('deletePaticipantInput') deletePaticipantInput: PaticipantDTO.DeletePaticipantInput,
	) {
		return this.paticipantsService.deletePaticipant(deletePaticipantInput, user);
	}

	@Mutation(() => [ Project ])
	getProjectsBySpacesAndMember (
		@CurrentUser() user: IPayLoadToken,
		@Args('projectsBySpacesAndMemberInput')
		projectsBySpacesAndMemberInput: PaticipantDTO.ProjectsBySpacesAndMemberInput,
	) {
		return this.paticipantsService.getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput, user._id);
	}

	@Mutation(() => [ Paticipant ])
	getUsersBelongProject (
		@Args('getUsersBelongProjectInput') getUsersBelongProjectInput: PaticipantDTO.GetUsersBelongProjectInput,
	) {
		return this.paticipantsService.getUsersBelongProject(getUsersBelongProjectInput);
	}

	@Mutation(() => Paticipant)
	changeRoleOfMemberOnPaticipant (
		@CurrentUser() user: IPayLoadToken,
		@Args('changeRoleOfMemberInput') changeRoleOfMemberInput: PaticipantDTO.ChangeRoleOfMemberInput,
	) {
		return this.paticipantsService.changeRoleOfMemberOnPaticipant(changeRoleOfMemberInput, user);
	}

	@ResolveField(() => Collaborator)
	_collaboratorId (@Parent() paticipant: Paticipant) {
		return this.paticipantsService.getCollaborator(paticipant._collaboratorId);
	}

	@ResolveField(() => Project)
	_projectId (@Parent() paticipant: Paticipant) {
		return this.paticipantsService.getProject(paticipant._projectId);
	}
}

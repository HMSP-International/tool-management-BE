import { Resolver, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Paticipant } from './classes/paticipant.entity';
import { PaticipantsService } from './paticipants.service';
import { IPayLoadToken } from '../../../helpers/modules/token/token.interface';
import { CurrentUser } from '../../../common/decorator/CurrentUser.decorator';
import * as PaticipantDTO from './classes/paticipants.dto';
import { Collaborator } from '../collaborators/classes/collaborator.entity';
import { Project } from '../projects/classes/project.entity';

@Resolver(() => Paticipant)
export class PaticipantsResolver {
	constructor (private readonly paticipantsService: PaticipantsService) {}

	@Mutation(() => Paticipant)
	createPaticipant (
		@CurrentUser() user: IPayLoadToken,
		@Args('createPaticipantInput') createPaticipantInput: PaticipantDTO.CreatePaticipantInput,
	) {
		return this.paticipantsService.createPaticipant(createPaticipantInput, user._id);
	}

	@Mutation(() => [ Project ])
	getProjectsBySpacesAndMember (
		@CurrentUser() user: IPayLoadToken,
		@Args('projectsBySpacesAndMemberInput')
		projectsBySpacesAndMemberInput: PaticipantDTO.ProjectsBySpacesAndMemberInput,
	) {
		this.paticipantsService.getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput);
		return [];
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

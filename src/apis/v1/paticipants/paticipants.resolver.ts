import { Resolver, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Paticipant } from './classes/paticipant.entity';
import { PaticipantsService } from './paticipants.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CurrentUser } from '../../../commons/decorator/currentUser.decorator';
import * as PaticipantDTO from './classes/paticipants.dto';
import { Collaborator } from 'apis/v1/collaborators/classes/collaborator.entity';
import { Project } from 'apis/v1/projects/classes/project.entity';
import { User } from 'apis/v1/users/classes/user.entity';
import { CurrentUserOption } from 'commons/decorator/currentUser.decoratorOption';

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
		return this.paticipantsService.deleteByMemberAndProject(deletePaticipantInput, user);
	}

	@Mutation(() => [ Project ])
	getProjectsBySpacesAndMember (
		@CurrentUserOption() user: IPayLoadToken,
		@Args('projectsBySpacesAndMemberInput')
		projectsBySpacesAndMemberInput: PaticipantDTO.ProjectsBySpacesAndMemberInput,
	) {
		if (user === null) {
			return this.paticipantsService.getProjectsBySpacesAndMember(
				projectsBySpacesAndMemberInput,
				'6218af3c17c3ddcfb76fb122',
			);
		}
		else {
			return this.paticipantsService.getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput, user._id);
		}
	}

	@Mutation(() => [ Paticipant ])
	getUsersBelongProject (
		@Args('getUsersBelongProjectInput') getUsersBelongProjectInput: PaticipantDTO.GetUsersBelongProjectInput,
	) {
		return this.paticipantsService.getUsersBelongProject(getUsersBelongProjectInput);
	}

	@Mutation(() => Paticipant)
	findPaticipantByProjectAndMember (
		@Args('getPaticipantByProjectAndMemberInput')
		getPaticipantByProjectAndMemberInput: PaticipantDTO.GetPaticipantByProjectAndMemberInput,
		@CurrentUserOption() user: IPayLoadToken,
	) {
		if (user === null) {
			return this.paticipantsService.findPaticipantByProjectAndMember(
				getPaticipantByProjectAndMemberInput,
				{
					_id: '61c97ada9b22541c404e3dd7',
					_roleId: '61c0251fb7ae1f8f80d7e568',
				},
				false,
			);
		}
		else {
			return this.paticipantsService.findPaticipantByProjectAndMember(
				getPaticipantByProjectAndMemberInput,
				user,
				false,
			);
		}
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

	@ResolveField(() => User)
	_memberId (@Parent() paticipant: Paticipant) {
		return this.paticipantsService.getUser(paticipant._memberId);
	}
}

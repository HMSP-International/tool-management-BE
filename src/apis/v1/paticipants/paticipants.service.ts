import { Injectable } from '@nestjs/common';
import * as PaticipantDTO from './classes/paticipants.dto';
import { Args } from '@nestjs/graphql';
import { PaticipantsCreateService } from './services.helper/create/paticipants.create.service';
import { PaticipantsFindService } from './services.helper/find/paticipants.find.service';
import { PaticipantsResolverFieldService } from './services.helper/resolveField/paticipants.resolveField.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { PaticipantsDeleteService } from './services.helper/delete/paticipants.delete.service';

@Injectable()
export class PaticipantsService {
	constructor (
		private readonly paticipantsCreateService: PaticipantsCreateService,
		private readonly paticipantsDeleteService: PaticipantsDeleteService,
		private readonly paticipantsFindService: PaticipantsFindService,
		private readonly paticipantsResolveFieldService: PaticipantsResolverFieldService,
	) {}

	createPaticipant (data: PaticipantDTO.CreatePaticipantInput, user: IPayLoadToken) {
		return this.paticipantsCreateService.create(data, user);
	}

	deletePaticipant (data: PaticipantDTO.DeletePaticipantInput, user: IPayLoadToken) {
		return this.paticipantsDeleteService.delete(data, user);
	}

	findByProjectAndDelete (_projectId: string) {
		return this.paticipantsDeleteService.findByProjectAndDelete(_projectId);
	}

	getProjectsBySpacesAndMember (
		projectsBySpacesAndMemberInput: PaticipantDTO.ProjectsBySpacesAndMemberInput,
		_memberId: string,
	) {
		return this.paticipantsFindService.getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput, _memberId);
	}

	getUsersBelongSpace (getUsersBelongProjectInput: PaticipantDTO.GetUsersBelongProjectInput) {
		return this.paticipantsFindService.getUsersBelongProject(getUsersBelongProjectInput);
	}

	getCollaborator (_id: string) {
		return this.paticipantsResolveFieldService.getCollaborator(_id);
	}

	getProject (_id: string) {
		return this.paticipantsResolveFieldService.getProject(_id);
	}
}

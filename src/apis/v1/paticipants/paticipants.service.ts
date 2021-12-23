import { Injectable } from '@nestjs/common';
import * as PaticipantDTO from './classes/paticipants.dto';
import { Args } from '@nestjs/graphql';
import { PaticipantsCreateService } from './services.helper/create/paticipants.create.service';
import { PaticipantsFindService } from './services.helper/find/paticipants.find.service';
import { PaticipantsResolverFieldService } from './services.helper/resolveField/paticipants.resolveField.service';

@Injectable()
export class PaticipantsService {
	constructor (
		private readonly paticipantsCreateService: PaticipantsCreateService,
		private readonly paticipantsFindService: PaticipantsFindService,
		private readonly paticipantsResolveFieldService: PaticipantsResolverFieldService,
	) {}

	createPaticipant (@Args('createPaticipantInput') data: PaticipantDTO.CreatePaticipantInput, _ownerId: string) {
		return this.paticipantsCreateService.create(data, _ownerId);
	}

	getProjectsBySpacesAndMember (projectsBySpacesAndMemberInput: PaticipantDTO.ProjectsBySpacesAndMemberInput) {
		return this.paticipantsFindService.getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput);
	}

	getCollaborator (_id: string) {
		return this.paticipantsResolveFieldService.getCollaborator(_id);
	}

	getProject (_id: string) {
		return this.paticipantsResolveFieldService.getProject(_id);
	}
}

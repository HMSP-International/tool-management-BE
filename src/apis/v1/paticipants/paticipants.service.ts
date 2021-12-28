import { Injectable } from '@nestjs/common';
import * as PaticipantDTO from './classes/paticipants.dto';
import { PaticipantsCreateService } from './services.helper/create/paticipants.create.service';
import { PaticipantsFindService } from './services.helper/find/paticipants.find.service';
import { PaticipantsResolverFieldService } from './services.helper/resolveField/paticipants.resolveField.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { PaticipantsDeleteService } from './services.helper/delete/paticipants.delete.service';
import { PaticipantsPutService } from './services.helper/put/paticipants.put.service';

@Injectable()
export class PaticipantsService {
	constructor (
		private readonly paticipantsCreateService: PaticipantsCreateService,
		private readonly paticipantsDeleteService: PaticipantsDeleteService,
		private readonly paticipantsFindService: PaticipantsFindService,
		private readonly paticipantsPutService: PaticipantsPutService,
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

	getUsersBelongProject (getUsersBelongProjectInput: PaticipantDTO.GetUsersBelongProjectInput) {
		return this.paticipantsFindService.getUsersBelongProject(getUsersBelongProjectInput);
	}

	changeRoleOfMemberOnPaticipant (
		changeRoleOfMemberInput: PaticipantDTO.ChangeRoleOfMemberInput,
		user: IPayLoadToken,
	) {
		return this.paticipantsPutService.changeRoleOfMemberOnPaticipant(changeRoleOfMemberInput, user);
	}

	getCollaborator (_id: string) {
		return this.paticipantsResolveFieldService.getCollaborator(_id);
	}

	getProject (_id: string) {
		return this.paticipantsResolveFieldService.getProject(_id);
	}
}

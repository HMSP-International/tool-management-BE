import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from '../../../helpers/modules/token/token.interface';
import { Collaborator } from './classes/collaborator.entity';
import * as CollaboratorDTO from './classes/collaborators.dto';
import { CollaboratorsResolverFieldService } from './services.helper/resolveField/collaborators.resolveField.service';
import { CollaboratorsFindService } from './services.helper/find/collaborators.find.service';
import { CollaboratorsInviteService } from './services.helper/invite/collaborators.invite.service';

@Injectable()
export class CollaboratorsService {
	constructor (
		private collaboratorsResolverFieldService: CollaboratorsResolverFieldService,
		private collaboratorsFindService: CollaboratorsFindService,
		private collaboratorsInviteService: CollaboratorsInviteService,
	) {}

	async findOneByInvitedSpace (_adminId: string, _memberId: string, _workSpaceId: string) {
		return this.collaboratorsFindService.findOneByInvitedSpace(_adminId, _memberId, _workSpaceId);
	}

	async findById (_id: string) {
		return this.collaboratorsFindService.findById(_id);
	}

	findUsersBySpaceId (_spaceId: string) {
		return this.collaboratorsFindService.findUsersBySpaceId(_spaceId);
	}

	findInvitedSpaces (user: IPayLoadToken) {
		return this.collaboratorsFindService.findInvitedSpaces(user);
	}

	inviteSpace = async (createCollaboratorInput: CollaboratorDTO.InviteSpaceInput, user: IPayLoadToken) => {
		return this.collaboratorsInviteService.inviteSpace(createCollaboratorInput, user);
	};

	verifyInviteSpace = (token: CollaboratorDTO.VerifyInviteSpaceInput) => {
		return this.collaboratorsInviteService.verifyInviteSpace(token);
	};

	async putInvitedSpaces (user: IPayLoadToken, putInvitedSpaceInput: CollaboratorDTO.PutInvitedSpaceInput) {
		return this.collaboratorsInviteService.putInvitedSpaces(user, putInvitedSpaceInput);
	}

	getSpace (_id: string) {
		return this.collaboratorsResolverFieldService.getSpace(_id);
	}

	getUser (_id: string) {
		return this.collaboratorsResolverFieldService.getUser(_id);
	}
}

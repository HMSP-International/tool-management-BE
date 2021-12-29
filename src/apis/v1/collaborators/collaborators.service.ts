import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from '../../../helpers/modules/token/token.interface';
import * as CollaboratorDTO from './classes/collaborators.dto';
import { CollaboratorsResolverFieldService } from './services.helper/resolveField/collaborators.resolveField.service';
import {
	CollaboratorsFindService,
	IMemberIdAndSpaceId,
	IMemberIdAndSpaceIdAndAdminId,
} from './services.helper/find/collaborators.find.service';
import { CollaboratorsCreateService } from './services.helper/create/collaborators.create.service';
import { CollaboratorsDeleteService } from './services.helper/delete/collaborators.delete.service';

@Injectable()
export class CollaboratorsService {
	constructor (
		private collaboratorsDeleteService: CollaboratorsDeleteService,
		private collaboratorsResolverFieldService: CollaboratorsResolverFieldService,
		private collaboratorsFindService: CollaboratorsFindService,
		private collaboratorsInviteService: CollaboratorsCreateService,
	) {}

	async findOneByInvitedSpace (_adminId: string, _memberId: string, _workSpaceId: string) {
		return this.collaboratorsFindService.findOneByInvitedSpace(_adminId, _memberId, _workSpaceId);
	}

	async findById (_id: string) {
		return this.collaboratorsFindService.findById(_id);
	}

	async findByMemberId (_memberId: string) {
		return this.collaboratorsFindService.findByMemberId(_memberId);
	}

	findUsersBySpaceId (_spaceId: string) {
		return this.collaboratorsFindService.findUsersBySpaceId(_spaceId);
	}

	findInvitedSpaces (user: IPayLoadToken) {
		return this.collaboratorsFindService.findInvitedSpaces(user);
	}

	findByMemberIdAndSpaceIdAndOwnerId = async (data: IMemberIdAndSpaceIdAndAdminId) => {
		return this.collaboratorsFindService.findByMemberIdAndSpaceIdAndOwnerId(data);
	};

	findByMemberIdAndSpaceId = async (data: IMemberIdAndSpaceId) => {
		return this.collaboratorsFindService.findByMemberIdAndSpaceId(data);
	};

	inviteSpace = async (createCollaboratorInput: CollaboratorDTO.InviteSpaceInput, user: IPayLoadToken) => {
		return this.collaboratorsInviteService.inviteSpace(createCollaboratorInput, user);
	};

	verifyInviteSpace = (token: CollaboratorDTO.VerifyInviteSpaceInput) => {
		return this.collaboratorsInviteService.verifyInviteSpace(token);
	};

	deleteBySpaceId = (_workSpaceId: string) => {
		return this.collaboratorsDeleteService.deleteBySpaceId(_workSpaceId);
	};

	deleteByMemberAndSpace = (deleteByUserAndSpace: CollaboratorDTO.DeleteByUserAndSpaceInput, user: IPayLoadToken) => {
		return this.collaboratorsDeleteService.deleteByMemberAndSpace(deleteByUserAndSpace, user);
	};

	async deleteByMemberId (_memberId: string) {
		return this.collaboratorsDeleteService.deleteByMemberId(_memberId);
	}

	// async putInvitedSpaces (user: IPayLoadToken, putInvitedSpaceInput: CollaboratorDTO.PutInvitedSpaceInput) {
	// 	return this.collaboratorsInviteService.putInvitedSpaces(user, putInvitedSpaceInput);
	// }

	getSpace (_id: string) {
		return this.collaboratorsResolverFieldService.getSpace(_id);
	}

	getUser (_id: string) {
		return this.collaboratorsResolverFieldService.getUser(_id);
	}
}

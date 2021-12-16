import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from '../../../helpers/modules/token/token.interface';
import { Collaborator } from './classes/collaborator.entity';
import * as CollaboratorDTO from './classes/collaborators.dto';
import { Space } from '../spaces/classes/space.entity';
import { User } from '../users/classes/user.entity';
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

	async findOneByInvitedSpace (
		_adminId: string,
		_memberId: string,
		_workSpaceId: string,
	): Promise<Collaborator | null> {
		return await this.collaboratorsFindService.findOneByInvitedSpace(_adminId, _memberId, _workSpaceId);
	}

	async findById (_id: string): Promise<Collaborator | null> {
		return await this.collaboratorsFindService.findById(_id);
	}

	async findUsersBySpaceId (_spaceId: string): Promise<Collaborator[]> {
		return await this.collaboratorsFindService.findUsersBySpaceId(_spaceId);
	}

	async findInvitedSpaces (user: IPayLoadToken): Promise<Collaborator[]> {
		return await this.collaboratorsFindService.findInvitedSpaces(user);
	}

	inviteSpace = async (
		createCollaboratorInput: CollaboratorDTO.InviteSpaceInput,
		user: IPayLoadToken,
	): Promise<Collaborator> => {
		return await this.collaboratorsInviteService.inviteSpace(createCollaboratorInput, user);
	};

	verifyInviteSpace = async (token: CollaboratorDTO.VerifyInviteSpaceInput): Promise<Collaborator> => {
		return await this.collaboratorsInviteService.verifyInviteSpace(token);
	};

	async putInvitedSpaces (
		user: IPayLoadToken,
		putInvitedSpaceInput: CollaboratorDTO.PutInvitedSpaceInput,
	): Promise<Collaborator[]> {
		return await this.collaboratorsInviteService.putInvitedSpaces(user, putInvitedSpaceInput);
	}

	async getSpace (_id: string): Promise<Space> {
		return await this.collaboratorsResolverFieldService.getSpace(_id);
	}

	async getUser (_id: string): Promise<User> {
		return await this.collaboratorsResolverFieldService.getUser(_id);
	}
}

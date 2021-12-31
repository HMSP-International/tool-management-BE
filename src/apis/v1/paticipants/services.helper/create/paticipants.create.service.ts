import { HttpException, HttpStatus, Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectsService } from '../../../projects/projects.service';
import { Model } from 'mongoose';
import { CollaboratorsService } from '../../../collaborators/collaborators.service';
import { PaticipantDocument, PaticipantModel } from '../../classes/paticipant.model';
import * as PaticipantDTO from '../../classes/paticipants.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CollaboratorDocument } from '../../../collaborators/classes/collaborator.model';
import { UsersService } from '../../../users/users.service';
import { UserDocument } from '../../../users/classes/user.model';

@Injectable()
export class PaticipantsCreateService {
	constructor (
		@InjectModel(PaticipantModel.name) private paticipantEntity: Model<PaticipantDocument>,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		@Inject(forwardRef(() => CollaboratorsService))
		private readonly collaboratorsService: CollaboratorsService,
		@Inject(forwardRef(() => UsersService))
		private readonly usersService: UsersService,
	) {}

	async create (data: PaticipantDTO.CreatePaticipantInput, user: IPayLoadToken): Promise<UserDocument> {
		const { _memberId, _projectId, role } = data;
		const { _id: _adminId } = user;

		const project = await this.projectsService.findById(_projectId);
		const _workSpaceId = project._spaceId;

		let collaborator: CollaboratorDocument = await this.collaboratorsService.findByMemberIdAndSpaceIdAndOwnerId({
			_memberId,
			_adminId,
			_workSpaceId,
		});

		if (collaborator === null) {
			collaborator = await this.collaboratorsService.inviteSpace({ _workSpaceId, _memberId, role }, user);
		}

		const paticipant = await this.paticipantEntity.findOne({
			_projectId,
			role,
			_collaboratorId: collaborator._id,
			_memberId,
		});

		if (paticipant === null) {
			await new this.paticipantEntity({ _projectId, role, _collaboratorId: collaborator._id, _memberId }).save();
		}

		return this.usersService.findById(_adminId);
	}
}

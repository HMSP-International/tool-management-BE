import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollaboratorsService } from '../../../collaborators/collaborators.service';
import { PaticipantDocument, PaticipantModel } from '../../classes/paticipant.model';
import * as PaticipantDTO from '../../classes/paticipants.dto';

@Injectable()
export class PaticipantsCreateService {
	constructor (
		@InjectModel(PaticipantModel.name) private paticipantEntity: Model<PaticipantDocument>,
		private readonly collaboratorsService: CollaboratorsService,
	) {}

	async create (data: PaticipantDTO.CreatePaticipantInput, _adminId: string): Promise<PaticipantDocument> {
		const { _memberId, _projectId, _spaceId, role } = data;

		const collaborator = await this.collaboratorsService.findByMemberIdAndSpaceIdAndOwnerId({
			_spaceId,
			_memberId,
			_adminId,
		});

		if (collaborator === null) {
			throw new HttpException('Can not create', HttpStatus.BAD_REQUEST);
		}

		const paticipant = await this.paticipantEntity.findOne({ _projectId, role, _collaboratorId: collaborator._id });

		if (paticipant === null) {
			return await new this.paticipantEntity({ _projectId, role, _collaboratorId: collaborator._id }).save();
		}

		return paticipant;
	}
}

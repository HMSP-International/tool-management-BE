import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
// mongoose
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaticipantDocument, PaticipantModel } from '../../classes/paticipant.model';
// interfaces
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as PaticipantDTO from '../../classes/paticipants.dto';
import { CollaboratorsService } from '../../../collaborators/collaborators.service';
// services
// classes

@Injectable()
export class PaticipantsPutService {
	constructor (
		@InjectModel(PaticipantModel.name) private paticipantEntity: Model<PaticipantDocument>,
		@Inject(forwardRef(() => CollaboratorsService))
		private readonly collaboratorsService: CollaboratorsService,
	) {}

	async changeRoleOfMemberOnPaticipant (
		changeRoleOfMemberInput: PaticipantDTO.ChangeRoleOfMemberInput,
		user: IPayLoadToken,
	): Promise<PaticipantDocument> {
		const { _collaboratorId, _projectId } = changeRoleOfMemberInput;

		const collaborator = await this.collaboratorsService.findById(_collaboratorId);

		if (collaborator._adminId.toString() !== user._id) {
			throw new HttpException('Not Authorization', HttpStatus.FORBIDDEN);
		}

		const paticipant = await this.paticipantEntity.findOne({ _collaboratorId, _projectId });
		if (paticipant === null) {
			throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		}

		return await this.paticipantEntity.findByIdAndUpdate(paticipant._id, changeRoleOfMemberInput, { new: true });
	}
}

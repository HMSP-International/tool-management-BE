import { HttpException, HttpStatus, Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaticipantDocument, PaticipantModel } from '../../classes/paticipant.model';
import * as PaticipantDTO from '../../classes/paticipants.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CollaboratorsService } from '../../../collaborators/collaborators.service';
import { ProjectsService } from '../../../projects/projects.service';

@Injectable()
export class PaticipantsDeleteService {
	constructor (
		@InjectModel(PaticipantModel.name) private paticipantEntity: Model<PaticipantDocument>,
		@Inject(forwardRef(() => CollaboratorsService))
		private readonly collaboratorsService: CollaboratorsService,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
	) {}

	async delete (data: PaticipantDTO.DeletePaticipantInput, user: IPayLoadToken): Promise<PaticipantDocument> {
		const { _memberId, _projectId } = data;

		const project = await this.projectsService.findById(_projectId);

		const collaborator = await this.collaboratorsService.findByMemberIdAndSpaceIdAndOwnerId({
			_workSpaceId: project._spaceId,
			_memberId,
			_adminId: user._id,
		});
		if (collaborator === null) {
			throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		}

		const paticipant = await this.paticipantEntity.findOne({ _collaboratorId: collaborator._id, _projectId });
		if (paticipant === null) {
			throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		}

		return await this.paticipantEntity.findByIdAndDelete(paticipant._id);
	}

	async findByProjectAndDelete (_projectId: string): Promise<void> {
		await this.paticipantEntity.deleteMany({ _projectId });
	}
}

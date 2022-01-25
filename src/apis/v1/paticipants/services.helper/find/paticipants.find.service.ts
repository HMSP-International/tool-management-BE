import { Injectable, forwardRef, Inject, HttpException, HttpStatus } from '@nestjs/common';
// classes
import * as PaticipantDTO from '../../classes/paticipants.dto';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { ProjectsService } from 'apis/v1/projects/projects.service';
// mongoose
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaticipantDocument, PaticipantModel } from '../../classes/paticipant.model';

@Injectable()
export class PaticipantsFindService {
	constructor (
		@InjectModel(PaticipantModel.name) private paticipantEntity: Model<PaticipantDocument>,
		@Inject(forwardRef(() => CollaboratorsService))
		private readonly collaboratorsService: CollaboratorsService,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
	) {}

	async getProjectsBySpacesAndMember (
		{ _spaceIds }: PaticipantDTO.ProjectsBySpacesAndMemberInput,
		_memberId: string,
	) {
		// get _collaboratorId
		const collaborators = await this.collaboratorsService.findByMemberIdAndSpaceId({
			_spaceIds,
			_memberId,
		});

		// get list paticipant
		const paticipants = [];
		for (let coll of collaborators) {
			const paticipant = await this.paticipantEntity.find({ _collaboratorId: coll._id });

			paticipants.push(...paticipant);
		}

		// get list projectId
		const projectIds: string[] = paticipants.filter(p => p !== null).map(p => p._projectId);

		// get list project
		const projectList = await this.projectsService.findByListId(projectIds);

		return projectList;
	}

	async getUsersBelongProject ({
		_projectId,
	}: PaticipantDTO.GetUsersBelongProjectInput): Promise<PaticipantDocument[]> {
		return await this.paticipantEntity.find({ _projectId });
	}

	async findPaticipantByProjectAndMember (
		{ _projectId }: PaticipantDTO.GetPaticipantByProjectAndMemberInput,
		user: IPayLoadToken,
		returnNull: boolean,
	): Promise<PaticipantDocument | null> {
		const paticipant = await this.paticipantEntity.findOne({ _projectId, _memberId: user._id });

		if (paticipant === null && !returnNull) {
			throw new HttpException('Not Found findPaticipantByProjectAndMember', HttpStatus.NOT_FOUND);
		}

		return paticipant;
	}
}

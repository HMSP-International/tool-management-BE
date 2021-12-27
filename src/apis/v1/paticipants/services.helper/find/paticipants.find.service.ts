import { Injectable, forwardRef, Inject } from '@nestjs/common';
// classes
import * as PaticipantDTO from '../../classes/paticipants.dto';
import { CollaboratorsService } from '../../../collaborators/collaborators.service';
// mongoose
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaticipantDocument, PaticipantModel } from '../../classes/paticipant.model';
import { ProjectsService } from '../../../projects/projects.service';

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
		const paticipantsPromise = [];
		for (let coll of collaborators) {
			const paticipant = this.paticipantEntity.findOne({ _collaboratorId: coll._id });

			paticipantsPromise.push(paticipant);
		}
		const paticipants = await Promise.all(paticipantsPromise);

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
}

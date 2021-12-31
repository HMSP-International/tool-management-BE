import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';
import { IPayLoadToken } from '../../../../../helpers/modules/token/token.interface';
import { SpacesService } from '../../../spaces/spaces.service';
// import { PaticipantsService } from '../../../paticipants/paticipants.service';

@Injectable()
export class ProjectsCreateService {
	constructor (
		@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>,
		@Inject(forwardRef(() => SpacesService))
		private readonly spacesService: SpacesService,
		// @Inject(forwardRef(() => PaticipantsService))
		// private readonly paticipantsService: PaticipantsService,
	) {}

	async create (createSpaceInput: ProjectDTO.CreateProjectInput, user: IPayLoadToken): Promise<ProjectDocument> {
		const { _spaceId } = createSpaceInput;

		const space = await this.spacesService.findBySpaceAndOwner(_spaceId, user._id);
		if (space === null)
			throw new HttpException('Not Found _spaceId or _spaceId is not yours', HttpStatus.BAD_REQUEST);

		const order = await this.projectEntity.countDocuments({ _spaceId });

		const project = await new this.projectEntity({ order, owner: user._id, ...createSpaceInput }).save();

		// await this.paticipantsService.createPaticipant(
		// 	{ _memberId: user._id, _projectId: project._id, role: 'owner' },
		// 	user,
		// );

		return project;
	}
}

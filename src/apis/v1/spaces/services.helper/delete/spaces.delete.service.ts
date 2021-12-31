import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
import { Model } from 'mongoose';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { SpaceModel, SpaceDocument } from '../../classes/space.model';
import { SpacesFindService } from '../find/spaces.find.service';

@Injectable()
export class SpacesDeleteService {
	constructor (
		@InjectModel(SpaceModel.name) private spaceEntity: Model<SpaceDocument>,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		private readonly spacesFindService: SpacesFindService,
		@Inject(forwardRef(() => CollaboratorsService))
		private readonly collaboratorsService: CollaboratorsService,
	) {}

	async deleteSpaceById (_workSpaceId: string, _userId: string): Promise<SpaceDocument> {
		const space = await this.spacesFindService.findById(_workSpaceId);
		if (space.owner.toString() !== _userId) {
			throw new HttpException('This space is not your', HttpStatus.BAD_REQUEST);
		}

		const projects = await this.projectsService.findAll([ _workSpaceId ], _userId);
		if (projects.length >= 1) {
			throw new HttpException('Please delete all project first', HttpStatus.BAD_REQUEST);
		}

		this.collaboratorsService.deleteBySpaceId(_workSpaceId);

		return await this.spaceEntity.findByIdAndDelete(_workSpaceId);
	}
}

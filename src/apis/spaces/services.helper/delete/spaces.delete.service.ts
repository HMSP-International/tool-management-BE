import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectsService } from '../../../../apis/projects/projects.service';
import { Space } from '../../classes/space.entity';
import { SpaceModel, SpaceDocument } from '../../classes/space.model';
import { SpacesFindService } from '../find/spaces.find.service';

@Injectable()
export class SpacesDeleteService {
	constructor (
		@InjectModel(SpaceModel.name) private spaceEntity: Model<SpaceDocument>,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
        private readonly spacesFindService: SpacesFindService,
	) {}

	async deleteSpaceById (_spaceId: string, _userId: string): Promise<Space> {
		const space = await this.spacesFindService.findById(_spaceId);
		if (space.owner.toString() !== _userId) {
			throw new HttpException('This space is not your', HttpStatus.BAD_REQUEST);
		}

		const projects = await this.projectsService.findAll([ _spaceId ], _userId);
		if (projects.length >= 1) {
			throw new HttpException('Please delete all project first', HttpStatus.BAD_REQUEST);
		}

		return await this.spaceEntity.findByIdAndDelete(_spaceId);
	}
}

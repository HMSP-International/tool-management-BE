import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { Project } from '../../classes/project.entity';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';
import { IPayLoadToken } from '../../../../helpers/modules/token/token.interface';
import { SpacesService } from '../../../spaces/spaces.service';

@Injectable()
export class ProjectsCreateService {
	constructor (
		@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>,
		@Inject(forwardRef(() => SpacesService))
		private readonly spacesService: SpacesService,
	) {}

	async create (createSpaceInput: ProjectDTO.CreateProjectInput, user: IPayLoadToken): Promise<Project[]> {
		const { _spaceId } = createSpaceInput;

		const space = await this.spacesService.findBySpaceAndOwner(_spaceId, user._id);
		if (space === null)
			throw new HttpException('Not Found _spaceId or _spaceId is not yours', HttpStatus.BAD_REQUEST);

		const order = await this.projectEntity.countDocuments({ _spaceId });

		const newProject = new this.projectEntity({ order, owner: user._id, ...createSpaceInput });
		await newProject.save();

		return this.projectEntity.find({ _spaceId }).sort('order');
	}
}

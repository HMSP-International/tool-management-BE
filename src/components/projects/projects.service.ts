import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './project.entity';
import { Model } from 'mongoose';
import * as ProjectDTO from './project.dto';
import { IPayLoadToken } from '../token/token.interface';
import { SpacesService } from '../spaces/spaces.service';

@Injectable()
export class ProjectsService {
	constructor (
		@InjectModel(Project.name) private projectEntity: Model<ProjectDocument>,
		private spacesService: SpacesService,
	) {}

	async findAll (
		getProjectsInput: ProjectDTO.GetProjectsInput,
		user: IPayLoadToken,
	): Promise<Project[]> {
		const projects = await this.projectEntity
			.find({ _spaceId: getProjectsInput._spacesId, owner: user._id })
			.sort('_spaceId order');

		return projects;
	}

	async create (
		createSpaceInput: ProjectDTO.CreateProjectInput,
		user: IPayLoadToken,
	): Promise<Project[]> {
		const { _spaceId } = createSpaceInput;

		// check if space exitsts
		const space = await this.spacesService.findBySpaceAndOwner(_spaceId, user._id);
		if (space === null)
			throw new HttpException(
				'Not Found _spaceId or _spaceId is not yours',
				HttpStatus.BAD_REQUEST,
			);

		const order = await this.projectEntity.countDocuments({ _spaceId });

		const newProject = new this.projectEntity({ order, owner: user._id, ...createSpaceInput });
		await newProject.save();

		return this.projectEntity.find({ _spaceId }).sort('order');
	}
}

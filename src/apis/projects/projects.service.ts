import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectModel, ProjectDocument } from './project.model';
import { Project } from './project.entity';
import { Model } from 'mongoose';
import * as ProjectDTO from './projects.dto';
import { IPayLoadToken } from '../../helpers/modules/token/token.interface';
import { SpacesService } from '../spaces/spaces.service';
import { ListsService } from '../lists/lists.service';

@Injectable()
export class ProjectsService {
	constructor (
		@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>,
		@Inject(forwardRef(() => SpacesService))
		private readonly spacesService: SpacesService,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
	) {}

	async findAll (_spacesId: string[], _userId: string): Promise<Project[]> {
		const projects = await this.projectEntity.find({ _spaceId: _spacesId, owner: _userId }).sort('_spaceId order');

		return projects;
	}

	async findById (_id: string): Promise<Project> {
		const project = await this.projectEntity.findById(_id);

		if (project === null) {
			throw new HttpException('Not Found _projectId', HttpStatus.BAD_REQUEST);
		}

		return project;
	}

	async findAllByCollaborator (getProjectsInput: ProjectDTO.GetProjectsInput): Promise<Project[]> {
		const projects = await this.projectEntity.find({ _spaceId: getProjectsInput._spacesId }).sort('_spaceId order');

		return projects;
	}

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

	async deleteProjectById (_projectId: string): Promise<Project> {
		const projectDeleted = await this.projectEntity.findByIdAndDelete(_projectId);
		if (projectDeleted === null) {
			throw new HttpException('Not Found _projectId', HttpStatus.NOT_FOUND);
		}

		this.listsService.deleteByProjectId(_projectId);

		return projectDeleted;
	}
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { Project } from '../../classes/project.entity';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';

@Injectable()
export class ProjectsFindService {
	constructor (@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>) {}

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

	async findByListId (_ids: string[]): Promise<Project[]> {
		const projects = await this.projectEntity.find({ _id: _ids });

		return projects;
	}

	async findAllByCollaborator (getProjectsInput: ProjectDTO.GetProjectsInput): Promise<Project[]> {
		const projects = await this.projectEntity.find({ _spaceId: getProjectsInput._spacesId }).sort('_spaceId order');

		return projects;
	}
}

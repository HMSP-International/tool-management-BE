import { Injectable } from '@nestjs/common';

import { Project } from './classes/project.entity';
import * as ProjectDTO from './classes/projects.dto';
import { IPayLoadToken } from '../../../helpers/modules/token/token.interface';

import { ProjectsCreateService } from './services.helper/create/projects.create.service';
import { ProjectsDeleteService } from './services.helper/delete/projects.delete.service';
import { ProjectsFindService } from './services.helper/find/projects.find.service';

@Injectable()
export class ProjectsService {
	constructor (
		private readonly projectsCreateService: ProjectsCreateService,
		private readonly projectsDeleteService: ProjectsDeleteService,
		private readonly projectsFindService: ProjectsFindService,
	) {}

	async findAll (_spacesId: string[], _userId: string) {
		return await this.projectsFindService.findAll(_spacesId, _userId);
	}

	async findById (_id: string) {
		return await this.projectsFindService.findById(_id);
	}

	async findByListId (_ids: string[]) {
		return await this.projectsFindService.findByListId(_ids);
	}

	async findAllByCollaborator (getProjectsInput: ProjectDTO.GetProjectsInput) {
		return await this.projectsFindService.findAllByCollaborator(getProjectsInput);
	}

	async create (createSpaceInput: ProjectDTO.CreateProjectInput, user: IPayLoadToken) {
		return await this.projectsCreateService.create(createSpaceInput, user);
	}

	async deleteProjectById (_projectId: string) {
		return await this.projectsDeleteService.deleteProjectById(_projectId);
	}
}

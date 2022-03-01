import { Injectable } from '@nestjs/common';
import * as ProjectDTO from './classes/projects.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

import { ProjectsCreateService } from './services.helper/create/projects.create.service';
import { ProjectsDeleteService } from './services.helper/delete/projects.delete.service';
import { ProjectsFindService } from './services.helper/find/projects.find.service';
import { ProjectsPutService } from './services.helper/put/projects.put.service';

@Injectable()
export class ProjectsService {
	constructor (
		private readonly projectsCreateService: ProjectsCreateService,
		private readonly projectsDeleteService: ProjectsDeleteService,
		private readonly projectsFindService: ProjectsFindService,
		private readonly projectsPutService: ProjectsPutService,
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

	async findByMemberIdAndSpaceId (findByMemberIdAndSpaceId: ProjectDTO.FindByMemberIdAndSpaceIdInput) {
		return await this.projectsFindService.findByMemberIdAndSpaceId(findByMemberIdAndSpaceId);
	}

	async create (createSpaceInput: ProjectDTO.CreateProjectInput, user: IPayLoadToken) {
		return await this.projectsCreateService.create(createSpaceInput, user);
	}

	async deleteProjectById (_projectId: string, user: IPayLoadToken) {
		return await this.projectsDeleteService.deleteProjectById(_projectId, user);
	}

	async changeNameProject (changeNameProject: ProjectDTO.ChangeNameProjectInput, user: IPayLoadToken) {
		return await this.projectsPutService.changeNameProject(changeNameProject, user);
	}

	async addNewViewer (addNewViewerInput: ProjectDTO.AddNewViewerInput, user: IPayLoadToken) {
		return await this.projectsPutService.addNewViewer(addNewViewerInput, user);
	}

	async removeViewerFromProject (removeViewerInput: ProjectDTO.RemoveViewerInput, user: IPayLoadToken) {
		return await this.projectsPutService.removeViewer(removeViewerInput, user);
	}
}

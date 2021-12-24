import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './classes/project.entity';
import { CurrentUser } from '../../../common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from '../../../helpers/modules/token/token.interface';
import * as ProjectDTO from './classes/projects.dto';

@Resolver(() => Project)
export class ProjectsResolver {
	constructor (private readonly projectsService: ProjectsService) {}

	@Mutation(() => [ Project ])
	async getProjects (
		@CurrentUser() user: IPayLoadToken,
		@Args('getProjectsInput') getProjectsInput: ProjectDTO.GetProjectsInput,
	) {
		return this.projectsService.findAll(getProjectsInput._spacesId, user._id);
	}

	@Query(() => Project)
	async getProject (@Args('getProjectInput') getProjectInput: ProjectDTO.GetProjectInput) {
		return this.projectsService.findById(getProjectInput._projectId);
	}

	@Mutation(() => [ Project ])
	async getProjectsByCollaborator (@Args('getProjectsInput') getProjectsInput: ProjectDTO.GetProjectsInput) {
		return this.projectsService.findAllByCollaborator(getProjectsInput);
	}

	@Mutation(() => [ Project ])
	async createProject (
		@CurrentUser() user: IPayLoadToken,
		@Args('createProjectInput') createSpaceInput: ProjectDTO.CreateProjectInput,
	) {
		return this.projectsService.create(createSpaceInput, user);
	}

	@Mutation(() => Project)
	async deleteProject (@Args('deleteProjectInput') deleteProjectInput: ProjectDTO.DeleteProjectInput) {
		return this.projectsService.deleteProjectById(deleteProjectInput._projectId);
	}
}

import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './classes/project.entity';
import { CurrentUser } from '../currentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as ProjectDTO from './classes/projects.dto';

@Resolver(() => Project)
export class ProjectsResolver {
	constructor (private readonly projectsService: ProjectsService) {}

	@Mutation(() => [ Project ])
	async getProjects (
		@CurrentUser() user: IPayLoadToken,
		@Args('getProjectsInput') getProjectsInput: ProjectDTO.GetProjectsInput,
	) {
		if (user === null) {
			return this.projectsService.findAll(getProjectsInput._spacesId, '61c97ada9b22541c404e3dd7');
		}
		else {
			return this.projectsService.findAll(getProjectsInput._spacesId, user._id);
		}
	}

	@Mutation(() => Project)
	async getProjectById (@Args('getProjectInput') getProjectInput: ProjectDTO.GetProjectInput) {
		return this.projectsService.findById(getProjectInput._projectId);
	}

	@Mutation(() => [ Project ])
	async getProjectByMemberIdAndSpaceId (
		@Args('findByMemberIdAndSpaceIdInput') findByMemberIdAndSpaceId: ProjectDTO.FindByMemberIdAndSpaceIdInput,
	) {
		return this.projectsService.findByMemberIdAndSpaceId(findByMemberIdAndSpaceId);
	}

	@Mutation(() => [ Project ])
	async getProjectsByCollaborator (@Args('getProjectsInput') getProjectsInput: ProjectDTO.GetProjectsInput) {
		return this.projectsService.findAllByCollaborator(getProjectsInput);
	}

	@Mutation(() => Project)
	async createProject (
		@CurrentUser() user: IPayLoadToken,
		@Args('createProjectInput') createSpaceInput: ProjectDTO.CreateProjectInput,
	) {
		return this.projectsService.create(createSpaceInput, user);
	}

	@Mutation(() => Project)
	async deleteProject (
		@Args('deleteProjectInput') deleteProjectInput: ProjectDTO.DeleteProjectInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.projectsService.deleteProjectById(deleteProjectInput._projectId, user);
	}

	@Mutation(() => Project)
	async changeNameProject (
		@Args('changeNameProjectInput') changeNameProject: ProjectDTO.ChangeNameProjectInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.projectsService.changeNameProject(changeNameProject, user);
	}
}

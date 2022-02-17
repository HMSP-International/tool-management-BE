import { ProjectsService } from './projects.service';
import { Project } from './classes/project.entity';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as ProjectDTO from './classes/projects.dto';
export declare class ProjectsResolver {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getProjects(user: IPayLoadToken, getProjectsInput: ProjectDTO.GetProjectsInput): Promise<import("./classes/project.model").ProjectDocument[]>;
    getProjectById(getProjectInput: ProjectDTO.GetProjectInput): Promise<import("./classes/project.model").ProjectDocument>;
    getProjectByMemberIdAndSpaceId(findByMemberIdAndSpaceId: ProjectDTO.FindByMemberIdAndSpaceIdInput): Promise<import("./classes/project.model").ProjectDocument[]>;
    getProjectsByCollaborator(getProjectsInput: ProjectDTO.GetProjectsInput): Promise<import("./classes/project.model").ProjectDocument[]>;
    createProject(user: IPayLoadToken, createSpaceInput: ProjectDTO.CreateProjectInput): Promise<import("./classes/project.model").ProjectDocument>;
    deleteProject(deleteProjectInput: ProjectDTO.DeleteProjectInput, user: IPayLoadToken): Promise<Project>;
    changeNameProject(changeNameProject: ProjectDTO.ChangeNameProjectInput, user: IPayLoadToken): Promise<import("./classes/project.model").ProjectDocument>;
}

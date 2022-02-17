import * as ProjectDTO from './classes/projects.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { ProjectsCreateService } from './services.helper/create/projects.create.service';
import { ProjectsDeleteService } from './services.helper/delete/projects.delete.service';
import { ProjectsFindService } from './services.helper/find/projects.find.service';
import { ProjectsPutService } from './services.helper/put/projects.put.service';
export declare class ProjectsService {
    private readonly projectsCreateService;
    private readonly projectsDeleteService;
    private readonly projectsFindService;
    private readonly projectsPutService;
    constructor(projectsCreateService: ProjectsCreateService, projectsDeleteService: ProjectsDeleteService, projectsFindService: ProjectsFindService, projectsPutService: ProjectsPutService);
    findAll(_spacesId: string[], _userId: string): Promise<import("./classes/project.model").ProjectDocument[]>;
    findById(_id: string): Promise<import("./classes/project.model").ProjectDocument>;
    findByListId(_ids: string[]): Promise<import("./classes/project.model").ProjectDocument[]>;
    findAllByCollaborator(getProjectsInput: ProjectDTO.GetProjectsInput): Promise<import("./classes/project.model").ProjectDocument[]>;
    findByMemberIdAndSpaceId(findByMemberIdAndSpaceId: ProjectDTO.FindByMemberIdAndSpaceIdInput): Promise<import("./classes/project.model").ProjectDocument[]>;
    create(createSpaceInput: ProjectDTO.CreateProjectInput, user: IPayLoadToken): Promise<import("./classes/project.model").ProjectDocument>;
    deleteProjectById(_projectId: string, user: IPayLoadToken): Promise<import("./classes/project.entity").Project>;
    changeNameProject(changeNameProject: ProjectDTO.ChangeNameProjectInput, user: IPayLoadToken): Promise<import("./classes/project.model").ProjectDocument>;
}

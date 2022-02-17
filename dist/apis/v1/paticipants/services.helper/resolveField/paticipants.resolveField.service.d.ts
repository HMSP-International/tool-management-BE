import { UsersService } from 'apis/v1/users/users.service';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
export declare class PaticipantsResolverFieldService {
    private readonly collaboratorsService;
    private readonly projectsService;
    private readonly usersService;
    constructor(collaboratorsService: CollaboratorsService, projectsService: ProjectsService, usersService: UsersService);
    getCollaborator(_id: string): Promise<import("../../../collaborators/classes/collaborator.model").CollaboratorDocument>;
    getProject(_id: string): Promise<import("../../../projects/classes/project.model").ProjectDocument>;
    getUser(_id: string): Promise<import("../../../users/classes/user.model").UserDocument>;
}

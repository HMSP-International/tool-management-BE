import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { ProjectDocument } from '../../classes/project.model';
import { IPayLoadToken } from '../../../../../helpers/modules/token/token.interface';
import { SpacesService } from '../../../spaces/spaces.service';
export declare class ProjectsCreateService {
    private projectEntity;
    private readonly spacesService;
    constructor(projectEntity: Model<ProjectDocument>, spacesService: SpacesService);
    create(createSpaceInput: ProjectDTO.CreateProjectInput, user: IPayLoadToken): Promise<ProjectDocument>;
}

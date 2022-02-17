import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { ProjectDocument } from '../../classes/project.model';
import { IPayLoadToken } from '../../../../../helpers/modules/token/token.interface';
export declare class ProjectsPutService {
    private projectEntity;
    constructor(projectEntity: Model<ProjectDocument>);
    changeNameProject({ _projectId, name }: ProjectDTO.ChangeNameProjectInput, user: IPayLoadToken): Promise<ProjectDocument>;
}

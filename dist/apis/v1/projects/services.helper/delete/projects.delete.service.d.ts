import { Model } from 'mongoose';
import { Project } from '../../classes/project.entity';
import { ProjectDocument } from '../../classes/project.model';
import { ListsService } from '../../../lists/lists.service';
import { PaticipantsService } from '../../../paticipants/paticipants.service';
import { IPayLoadToken } from '../../../../../helpers/modules/token/token.interface';
export declare class ProjectsDeleteService {
    private projectEntity;
    private readonly listsService;
    private readonly paticipantsService;
    constructor(projectEntity: Model<ProjectDocument>, listsService: ListsService, paticipantsService: PaticipantsService);
    deleteProjectById(_projectId: string, user: IPayLoadToken): Promise<Project>;
}

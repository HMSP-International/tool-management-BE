import { Model } from 'mongoose';
import { ListDocument } from '../../classes/list.model';
import { TasksService } from 'apis/v1/tasks/tasks.service';
import { ListsPutService } from '../put/lists.put.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { ProjectsService } from 'apis/v1/projects/projects.service';
export declare class ListsDeleteService {
    private listEntity;
    private readonly tasksService;
    private readonly listsPutService;
    private readonly projectsService;
    constructor(listEntity: Model<ListDocument>, tasksService: TasksService, listsPutService: ListsPutService, projectsService: ProjectsService);
    deleteListById(_listId: string, user: IPayLoadToken): Promise<ListDocument>;
    deleteByProjectId(_projectId: string, user: IPayLoadToken): Promise<void>;
}

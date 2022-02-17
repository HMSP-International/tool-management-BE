import { Model } from 'mongoose';
import { TaskDocument } from '../../classes/task.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as TaskDto from '../../classes/tasks.dto';
import { ListsService } from 'apis/v1/lists/lists.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';
export declare class TasksCreateService {
    private taskEntity;
    private readonly listsService;
    private readonly projectsService;
    private readonly paticipantsService;
    constructor(taskEntity: Model<TaskDocument>, listsService: ListsService, projectsService: ProjectsService, paticipantsService: PaticipantsService);
    createTask(getTasksInput: TaskDto.CreateTaskInput, user: IPayLoadToken): Promise<TaskDocument>;
}

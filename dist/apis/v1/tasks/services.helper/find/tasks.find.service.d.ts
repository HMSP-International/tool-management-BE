import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Model } from 'mongoose';
import { TaskDocument } from '../../classes/task.model';
import * as TaskDto from '../../classes/tasks.dto';
export declare class TasksFindService {
    private taskEntity;
    private readonly paticipantsService;
    constructor(taskEntity: Model<TaskDocument>, paticipantsService: PaticipantsService);
    findTasksByListId(getTasksInput: TaskDto.GetTasksInput): Promise<TaskDocument[]>;
    findById({ _taskId }: TaskDto.GetTaskByIdInput): Promise<TaskDocument>;
    findTaskByUserId({ _ }: TaskDto.GetByUserId, user: IPayLoadToken): Promise<void>;
}

import { CommentsService } from 'apis/v1/comments/comments.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Model } from 'mongoose';
import { TaskDocument } from '../../classes/task.model';
import * as TaskDto from '../../classes/tasks.dto';
export declare class TasksDeleteService {
    private taskEntity;
    private readonly commentsService;
    constructor(taskEntity: Model<TaskDocument>, commentsService: CommentsService);
    deleteTasks(deleteTaskInput: TaskDto.DeleteTaskInput, user: IPayLoadToken): Promise<TaskDocument[]>;
    deleteTasksByListId(_listId: string): Promise<void>;
    removeComment(_taskId: string, _commentId: string | string[] | null): Promise<void>;
}

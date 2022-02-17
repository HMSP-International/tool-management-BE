import { Model } from 'mongoose';
import * as commentDTO from '../../classes/comments.dto';
import { CommentDocument } from '../../classes/comment.model';
import { TasksService } from 'apis/v1/tasks/tasks.service';
import { UsersService } from 'apis/v1/users/users.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class CommentsCreateService {
    private commentEntity;
    private readonly usersService;
    private readonly tasksService;
    constructor(commentEntity: Model<CommentDocument>, usersService: UsersService, tasksService: TasksService);
    create({ _taskId, content }: commentDTO.CreateCommentInput, user: IPayLoadToken): Promise<CommentDocument>;
}

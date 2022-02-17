import { Model } from 'mongoose';
import * as commentDTO from '../../classes/comments.dto';
import { CommentDocument } from '../../classes/comment.model';
import { TasksService } from 'apis/v1/tasks/tasks.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class CommentsDeleteService {
    private commentEntity;
    private readonly tasksService;
    constructor(commentEntity: Model<CommentDocument>, tasksService: TasksService);
    deleteById({ _commentId }: commentDTO.DeleteCommentInput, user: IPayLoadToken): Promise<CommentDocument>;
    deleteByTaskId(_taskId: string): Promise<void>;
}

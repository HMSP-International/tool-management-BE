import { CommentsService } from './comments.service';
import { Comment } from './classes/comment.entity';
import * as commentDTO from './classes/comments.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class CommentsResolver {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(createCommentInput: commentDTO.CreateCommentInput, user: IPayLoadToken): Promise<import("./classes/comment.model").CommentDocument>;
    deleteCommentById(deleteCommentInput: commentDTO.DeleteCommentInput, user: IPayLoadToken): Promise<import("./classes/comment.model").CommentDocument>;
    changeContentByCommentId(putChangeCommentInput: commentDTO.PutChangeCommentInput, user: IPayLoadToken): Promise<import("./classes/comment.model").CommentDocument>;
    _userId(comment: Comment): Promise<import("../users/classes/user.model").UserDocument>;
    _taskId(comment: Comment): Promise<import("../tasks/classes/task.model").TaskDocument>;
}

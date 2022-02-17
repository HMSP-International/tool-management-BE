/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as commentDTO from './classes/comments.dto';
import { CommentsCreateService } from './service.helper/create/comments.create.service';
import { CommentsDeleteService } from './service.helper/delete/comments.delete.service';
import { CommentsFindService } from './service.helper/find/comments.find.service';
import { CommentsPutService } from './service.helper/put/comments.put.service';
import { CommentsResolverFieldService } from './service.helper/resolveField/comments.resolveField.service';
export declare class CommentsService {
    private readonly commentsCreateService;
    private readonly commentsDeleteService;
    private readonly commentsFindService;
    private readonly commentsPutService;
    private readonly commentsResolverFieldService;
    constructor(commentsCreateService: CommentsCreateService, commentsDeleteService: CommentsDeleteService, commentsFindService: CommentsFindService, commentsPutService: CommentsPutService, commentsResolverFieldService: CommentsResolverFieldService);
    create(createCommentInput: commentDTO.CreateCommentInput, user: IPayLoadToken): Promise<import("./classes/comment.model").CommentDocument>;
    deleteById(comment: commentDTO.DeleteCommentInput, user: IPayLoadToken): Promise<import("./classes/comment.model").CommentDocument>;
    deleteByTaskId(_taskId: string): Promise<void>;
    changeContentByCommentId(comment: commentDTO.PutChangeCommentInput, user: IPayLoadToken): Promise<import("./classes/comment.model").CommentDocument>;
    getModel(): import("mongoose").Model<import("./classes/comment.model").CommentDocument, {}, {}, {}>;
    getUser(_id: string): Promise<import("../users/classes/user.model").UserDocument>;
    getTask(_id: string): Promise<import("../tasks/classes/task.model").TaskDocument>;
}

import { Model } from 'mongoose';
import * as commentDTO from '../../classes/comments.dto';
import { CommentDocument } from '../../classes/comment.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class CommentsPutService {
    private commentEntity;
    constructor(commentEntity: Model<CommentDocument>);
    changeContentByCommentId({ _commentId, content }: commentDTO.PutChangeCommentInput, user: IPayLoadToken): Promise<CommentDocument>;
}

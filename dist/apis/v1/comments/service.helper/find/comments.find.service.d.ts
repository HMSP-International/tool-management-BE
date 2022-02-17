import { Model } from 'mongoose';
import { CommentDocument } from '../../classes/comment.model';
export declare class CommentsFindService {
    private commentEntity;
    constructor(commentEntity: Model<CommentDocument>);
    getModel(): Model<CommentDocument>;
}

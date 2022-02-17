import * as mongoose from 'mongoose';
export declare type CommentDocument = CommentModel & mongoose.Document;
export declare class CommentModel {
    _id: string;
    _userId: string;
    _taskId: string;
    content: string;
}
export declare const CommentSchema: mongoose.Schema<mongoose.Document<CommentModel, any, any>, mongoose.Model<mongoose.Document<CommentModel, any, any>, any, any, any>, any, any>;

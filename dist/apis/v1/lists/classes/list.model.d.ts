import * as mongoose from 'mongoose';
export declare type ListDocument = ListModel & mongoose.Document;
export declare class ListModel {
    _projectId: string;
    name: string;
    order: number;
}
export declare const ListSchema: mongoose.Schema<mongoose.Document<ListModel, any, any>, mongoose.Model<mongoose.Document<ListModel, any, any>, any, any, any>, {}>;

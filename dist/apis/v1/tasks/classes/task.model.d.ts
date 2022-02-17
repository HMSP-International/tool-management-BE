import * as mongoose from 'mongoose';
import { ITimestamp } from './timestamp';
export declare type TaskDocument = TaskModel & mongoose.Document;
export declare class TaskModel {
    _id: string;
    name: string;
    _listId: string;
    order: number;
    reporter: string;
    timestamp: ITimestamp;
    _projectId: string;
    assignee: string;
    descriptions: string;
    comments: string[];
}
export declare const TaskSchema: mongoose.Schema<mongoose.Document<TaskModel, any, any>, mongoose.Model<mongoose.Document<TaskModel, any, any>, any, any, any>, any, any>;

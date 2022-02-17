import * as mongoose from 'mongoose';
export declare type ProjectDocument = ProjectModel & mongoose.Document;
export declare class ProjectModel {
    name: string;
    owner: string;
    _spaceId: string;
    order: number;
}
export declare const ProjectSchema: mongoose.Schema<mongoose.Document<ProjectModel, any, any>, mongoose.Model<mongoose.Document<ProjectModel, any, any>, any, any, any>, any, any>;

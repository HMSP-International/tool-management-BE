import * as mongoose from 'mongoose';
export declare type SpaceDocument = SpaceModel & mongoose.Document;
export declare class SpaceModel {
    name: string;
    owner: string;
    order: number;
}
export declare const SpaceSchema: mongoose.Schema<mongoose.Document<SpaceModel, any, any>, mongoose.Model<mongoose.Document<SpaceModel, any, any>, any, any, any>, any, any>;

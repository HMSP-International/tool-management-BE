import * as mongoose from 'mongoose';
export declare type RoleDocument = RoleModel & mongoose.Document;
export declare class RoleModel {
    name: string;
}
export declare const RoleSchema: mongoose.Schema<mongoose.Document<RoleModel, any, any>, mongoose.Model<mongoose.Document<RoleModel, any, any>, any, any, any>, {}>;

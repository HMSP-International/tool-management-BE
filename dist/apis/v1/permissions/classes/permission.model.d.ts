import * as mongoose from 'mongoose';
export declare type PermissionDocument = PermissionModel & mongoose.Document;
export declare class PermissionModel {
    resolverName: string;
    _roleId: string;
}
export declare const PermissionSchema: mongoose.Schema<mongoose.Document<PermissionModel, any, any>, mongoose.Model<mongoose.Document<PermissionModel, any, any>, any, any, any>, any, any>;

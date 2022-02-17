import * as mongoose from 'mongoose';
export declare type CollaboratorDocument = CollaboratorModel & mongoose.Document;
export declare class CollaboratorModel {
    _workSpaceId: string;
    _memberId: string;
    _adminId: string;
    role: string;
    confirmEmail: boolean;
}
export declare const CollaboratorSchema: mongoose.Schema<mongoose.Document<CollaboratorModel, any, any>, mongoose.Model<mongoose.Document<CollaboratorModel, any, any>, any, any, any>, any, any>;

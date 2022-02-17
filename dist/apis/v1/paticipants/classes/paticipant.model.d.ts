import * as mongoose from 'mongoose';
export declare type PaticipantDocument = PaticipantModel & mongoose.Document;
export declare class PaticipantModel {
    _id: string;
    _collaboratorId: string;
    _projectId: string;
    role: string;
    _memberId: string;
}
export declare const PaticipantSchema: mongoose.Schema<mongoose.Document<PaticipantModel, any, any>, mongoose.Model<mongoose.Document<PaticipantModel, any, any>, any, any, any>, {}>;

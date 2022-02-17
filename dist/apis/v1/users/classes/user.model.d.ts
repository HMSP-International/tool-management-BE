import * as mongoose from 'mongoose';
export declare type UserDocument = UserModel & mongoose.Document;
export declare class UserModel {
    _id: string;
    avatar: string;
    email: string;
    password: string;
    displayName: string;
    _roleId: string;
    department: string;
    position: string;
    title: string;
}
export declare const UserSchema: mongoose.Schema<mongoose.Document<UserModel, any, any>, mongoose.Model<mongoose.Document<UserModel, any, any>, any, any, any>, {}>;

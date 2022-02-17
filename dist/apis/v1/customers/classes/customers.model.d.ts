import * as mongoose from 'mongoose';
export declare type CustomerDocument = CustomerModel & mongoose.Document;
export declare class CustomerModel {
    _id: string;
    avatar: string;
    email: string;
    displayName: string;
    password: string;
}
export declare const CustomerSchema: mongoose.Schema<mongoose.Document<CustomerModel, any, any>, mongoose.Model<mongoose.Document<CustomerModel, any, any>, any, any, any>, {}>;

/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
export interface ITimestamp {
    createAt: Date;
    updateAt: Date;
}
export declare class TimestampModel {
    createAt: Date;
    updateAt: Date;
}
export declare const TimestampSchema: import("mongoose").Schema<import("mongoose").Document<TimestampModel, any, any>, import("mongoose").Model<import("mongoose").Document<TimestampModel, any, any>, any, any, any>, any, any>;
export declare class Timestamp {
    updateAt: Date;
    createAt: Date;
}

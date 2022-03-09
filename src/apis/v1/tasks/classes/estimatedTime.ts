import * as mongoose from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

const ObjectId = mongoose.SchemaTypes.ObjectId;
export interface IEstimatedTime {
	_listId: string;
	totalTime: number;
	lastTime: string | null;
}

@Schema()
export class EstimatedTimeModel {
	@Prop({ type: ObjectId, ref: 'listmodels', required: true })
	_listId: string;

	@Prop({ type: Number, default: 0 })
	totalTime: number;

	@Prop({ type: Date })
	lastTime: string;
}
export const EstimatedTimeSchema = SchemaFactory.createForClass(EstimatedTimeModel);

@ObjectType()
export class EstimatedTime {
	@Field(() => String)
	_listId: string;

	@Field(() => Number)
	totalTime: number;

	@Field(() => Date, { nullable: true })
	lastTime: string;
}

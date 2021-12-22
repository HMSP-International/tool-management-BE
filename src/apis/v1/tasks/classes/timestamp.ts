import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface ITimestamp {
	createAt: Date;
	updateAt: Date;
}

@Schema()
export class TimestampModel {
	@Prop({ type: Date })
	createAt: Date;

	@Prop({ type: Date })
	updateAt: Date;
}
export const TimestampSchema = SchemaFactory.createForClass(TimestampModel);

@ObjectType()
export class Timestamp {
	@Field(() => Date)
	updateAt: Date;

	@Field(() => Date)
	createAt: Date;
}

import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

export type TaskDocument = Task & mongoose.Document;

@Schema()
@ObjectType()
export class Task {
	@Field(() => String)
	_id: string;

	@Prop({ type: Date, default: new Date() })
	@Field(() => Date)
	createdAt: Date;

	@Prop({ type: Date, default: new Date() })
	@Field(() => Date)
	updatedAt: Date;

	@Prop({ type: Number, default: -1 })
	@Field(() => Number)
	order: Number;

	@Prop({ type: String })
	@Field(() => String)
	levelOfDifficult: string;

	@Prop({ type: [ ObjectId ], ref: 'users' })
	@Field(() => [ String ])
	assignee: [string];
}

export const UserSchema = SchemaFactory.createForClass(Task);

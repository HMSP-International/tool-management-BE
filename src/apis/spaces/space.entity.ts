import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/user.entity';

export type SpaceDocument = Space & mongoose.Document;

@Schema()
@ObjectType()
export class Space {
	@Field(() => String)
	_id: string;

	@Prop({ type: 'string', required: true })
	@Field(() => String)
	name: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name, required: true })
	@Field(() => String)
	owner: string;

	@Prop({ type: Number, required: true })
	@Field(() => Number)
	order: number;
}

export const SpaceSchema = SchemaFactory.createForClass(Space);

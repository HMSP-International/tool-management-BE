import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Space } from '../spaces/space.entity';
import { User } from '../users/user.entity';

export type ProjectDocument = Project & mongoose.Document;

@Schema()
@ObjectType()
export class Project {
	@Field(() => String)
	_id: string;

	@Prop({ type: 'string', required: true })
	@Field(() => String)
	name: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name, required: true })
	@Field(() => String)
	owner: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: Space.name, required: true })
	@Field(() => String)
	_spaceId: string;

	@Prop({ type: Number, required: true })
	@Field(() => Number)
	order: number;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

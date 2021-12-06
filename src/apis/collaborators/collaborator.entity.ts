import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Space } from '../spaces/space.entity';
import { User } from '../users/user.entity';

const ObjectId = mongoose.Schema.Types.ObjectId;

export type CollaboratorDocument = Collaborator & mongoose.Document;

@Schema()
@ObjectType()
export class Collaborator {
	@Field(() => String)
	_id: string;

	@Prop({ type: ObjectId, required: true, ref: Space.name })
	@Field(() => Space)
	_workSpaceId: string;

	@Prop({ type: ObjectId, required: true, ref: User.name })
	@Field(() => String)
	_memberId: string;

	@Prop({ type: ObjectId, required: true, ref: User.name })
	@Field(() => String)
	_adminId: string;

	@Prop({ type: String, default: 'MEMBER' })
	@Field(() => String)
	role: string;

	@Prop({ type: Boolean, default: false })
	@Field(() => Boolean)
	confirmEmail: boolean;
}

export const CollaboratorSchema = SchemaFactory.createForClass(Collaborator);

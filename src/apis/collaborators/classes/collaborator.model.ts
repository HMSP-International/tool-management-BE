import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { SpaceModel } from '../../spaces/space.model';
import { UserModel } from '../../users/classes/user.model';

const ObjectId = mongoose.Schema.Types.ObjectId;
export type CollaboratorDocument = CollaboratorModel & mongoose.Document;

@Schema()
export class CollaboratorModel {
	@Prop({ type: ObjectId, required: true, ref: SpaceModel.name })
	_workSpaceId: string;

	@Prop({ type: ObjectId, required: true, ref: UserModel.name })
	_memberId: string;

	@Prop({ type: ObjectId, required: true, ref: UserModel.name })
	_adminId: string;

	@Prop({ type: String, default: 'MEMBER' })
	role: string;

	@Prop({ type: Boolean, default: false })
	confirmEmail: boolean;
}

export const CollaboratorSchema = SchemaFactory.createForClass(CollaboratorModel);

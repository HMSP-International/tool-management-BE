import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { UserModel } from 'apis/v1/users/classes/user.model';

const ObjectId = mongoose.Schema.Types.ObjectId;
export type CommentDocument = CommentModel & mongoose.Document;

@Schema()
export class CommentModel {
	_id: string;

	@Prop({ type: ObjectId, required: true, ref: UserModel.name })
	_userId: string;

	@Prop({ type: ObjectId, required: true, ref: 'taskmodels' })
	_taskId: string;

	@Prop({ type: String, default: '' })
	content: string;
}

export const CommentSchema = SchemaFactory.createForClass(CommentModel);

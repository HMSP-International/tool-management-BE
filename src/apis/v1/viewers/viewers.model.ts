import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserModel } from 'apis/v1/users/classes/user.model';

const ObjectId = mongoose.Schema.Types.ObjectId;
export type ViewerDocument = ViewerModel & mongoose.Document;

@Schema()
export class ViewerModel {
	@Prop({ type: ObjectId, required: true, ref: UserModel.name })
	_userId: string;

	@Prop({ type: [ String ], default: [] })
	viewers: string[];
}

export const ViewerSchema = SchemaFactory.createForClass(ViewerModel);

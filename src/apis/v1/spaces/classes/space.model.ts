import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserModel } from 'apis/v1/users/classes/user.model';

export type SpaceDocument = SpaceModel & mongoose.Document;

@Schema()
export class SpaceModel {
	@Prop({ type: 'string', required: true })
	name: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: UserModel.name, required: true })
	owner: string;

	@Prop({ type: Number, required: true })
	order: number;

	// @Prop({ type: [ String ], default: [] })
	// viewers: string[];
}

export const SpaceSchema = SchemaFactory.createForClass(SpaceModel);

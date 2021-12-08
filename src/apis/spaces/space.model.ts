import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UserModel } from '../users/user.model';

export type SpaceDocument = SpaceModel & mongoose.Document;

@Schema()
export class SpaceModel {
	@Prop({ type: 'string', required: true })
	name: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: UserModel.name, required: true })
	owner: string;

	@Prop({ type: Number, required: true })
	order: number;
}

export const SpaceSchema = SchemaFactory.createForClass(SpaceModel);

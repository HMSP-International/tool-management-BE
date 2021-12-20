import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type RoleDocument = RoleModel & mongoose.Document;

@Schema()
export class RoleModel {
	@Prop({ type: String, required: true })
	name: string;
}

export const RoleSchema = SchemaFactory.createForClass(RoleModel);

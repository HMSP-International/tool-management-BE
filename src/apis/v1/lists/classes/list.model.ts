import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ProjectModel } from 'apis/v1/projects/classes/project.model';

export type ListDocument = ListModel & mongoose.Document;

@Schema()
export class ListModel {
	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: ProjectModel.name, required: true })
	_projectId: string;

	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: Number, required: true })
	order: number;
}

export const ListSchema = SchemaFactory.createForClass(ListModel);

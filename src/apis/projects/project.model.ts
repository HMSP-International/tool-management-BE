import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { SpaceModel } from '../spaces/space.model';
import { UserModel } from '../users/user.model';

export type ProjectDocument = ProjectModel & mongoose.Document;

@Schema()
export class ProjectModel {
	@Prop({ type: 'string', required: true })
	name: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: UserModel.name, required: true })
	owner: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: SpaceModel.name, required: true })
	_spaceId: string;

	@Prop({ type: Number, required: true })
	order: number;
}

export const ProjectSchema = SchemaFactory.createForClass(ProjectModel);

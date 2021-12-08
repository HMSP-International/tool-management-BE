import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Space } from '../spaces/space.entity';
import { User } from '../users/user.entity';

export type ProjectDocument = ProjectModel & mongoose.Document;

@Schema()
export class ProjectModel {
	@Prop({ type: 'string', required: true })
	name: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: User.name, required: true })
	owner: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: Space.name, required: true })
	_spaceId: string;

	@Prop({ type: Number, required: true })
	order: number;
}

export const ProjectSchema = SchemaFactory.createForClass(ProjectModel);

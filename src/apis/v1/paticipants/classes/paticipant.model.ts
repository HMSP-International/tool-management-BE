import { UserModel } from './../../users/classes/user.model';
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProjectModel } from '../../projects/classes/project.model';
import { CollaboratorModel } from '../../collaborators/classes/collaborator.model';

const ObjectId = mongoose.Schema.Types.ObjectId;
export type PaticipantDocument = PaticipantModel & mongoose.Document;

@Schema()
export class PaticipantModel {
	_id: string;

	@Prop({ type: ObjectId, required: true, ref: CollaboratorModel.name })
	_collaboratorId: string;

	@Prop({ type: ObjectId, required: true, ref: ProjectModel.name })
	_projectId: string;

	@Prop({ type: String, default: 'member' })
	role: string;

	@Prop({ type: ObjectId, required: true, ref: UserModel.name })
	_memberId: string;
}

export const PaticipantSchema = SchemaFactory.createForClass(PaticipantModel);

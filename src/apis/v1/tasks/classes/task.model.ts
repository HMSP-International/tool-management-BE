import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ListModel } from '../../lists/classes/list.model';

export type TaskDocument = TaskModel & mongoose.Document;

@Schema()
export class TaskModel {
	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: ListModel.name, required: true })
	_listId: string;
}

export const TaskSchema = SchemaFactory.createForClass(TaskModel);

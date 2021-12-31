import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ListModel } from 'apis/v1/lists/classes/list.model';
import { TimestampSchema, ITimestamp } from './timestamp';

export type TaskDocument = TaskModel & mongoose.Document;

@Schema()
export class TaskModel {
	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: mongoose.SchemaTypes.ObjectId, ref: ListModel.name, required: true })
	_listId: string;

	@Prop({ type: TimestampSchema, default: { createAt: Date.now(), updateAt: Date.now() } })
	timestamp: ITimestamp;
}

export const TaskSchema = SchemaFactory.createForClass(TaskModel);

TaskSchema.pre<TaskModel>('updateOne', function (next: Function) {
	if (!this.timestamp.createAt) {
		this.timestamp.updateAt = new Date();

		next();
	}
});

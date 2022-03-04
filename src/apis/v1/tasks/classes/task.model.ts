import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ListModel } from 'apis/v1/lists/classes/list.model';
import { TimestampSchema, ITimestamp } from './timestamp';
import { ProjectModel } from 'apis/v1/projects/classes/project.model';
import { UserModel } from 'apis/v1/users/classes/user.model';
import { CommentModel } from 'apis/v1/comments/classes/comment.model';

const ObjectId = mongoose.SchemaTypes.ObjectId;
export type TaskDocument = TaskModel & mongoose.Document;

@Schema()
export class TaskModel {
	_id: string;

	@Prop({ type: String, required: true }) //
	name: string;

	@Prop({ type: ObjectId, ref: ListModel.name, required: true }) //
	_listId: string;

	@Prop({ type: Number, required: true })
	order: number;

	@Prop({ type: ObjectId, ref: UserModel.name, required: true })
	reporter: string;

	@Prop({ type: TimestampSchema, default: { createAt: Date.now(), updateAt: Date.now() } })
	timestamp: ITimestamp;

	@Prop({ type: ObjectId, ref: ProjectModel.name, required: true })
	_projectId: string;

	@Prop({ type: ObjectId, ref: UserModel.name }) //
	assignee: string;

	@Prop({ type: String, default: '' }) //
	descriptions: string;

	@Prop([ { type: ObjectId, default: [], ref: CommentModel.name } ])
	comments: string[];

	@Prop({ type: Number, default: 0 })
	stt: number;
}

export const TaskSchema = SchemaFactory.createForClass(TaskModel);

// TaskSchema.pre<TaskModel>('updateOne', function (next: Function) {
// 	this.timestamp.updateAt = new Date();
// 	console.log(this.timestamp.updateAt);

// 	next();
// });

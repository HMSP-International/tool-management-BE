import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TimestampSchema, ITimestamp } from './timestamp';
import { ProjectModel } from 'apis/v1/projects/classes/project.model';
import { UserModel } from 'apis/v1/users/classes/user.model';
import { CommentModel } from 'apis/v1/comments/classes/comment.model';
import { EstimatedTimeSchema, IEstimatedTime } from './estimatedTime';

const ObjectId = mongoose.SchemaTypes.ObjectId;
export type TaskDocument = TaskModel & mongoose.Document;

@Schema()
export class TaskModel {
	_id: string;

	@Prop({ type: String, required: true }) //
	name: string;

	@Prop({ type: ObjectId, ref: 'listmodels', required: true }) //
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

	@Prop({ type: [ EstimatedTimeSchema ], default: [] })
	estimatedTime: IEstimatedTime[];

	@Prop({ type: Number, default: 0 })
	completionTime: number;
}

export const TaskSchema = SchemaFactory.createForClass(TaskModel);

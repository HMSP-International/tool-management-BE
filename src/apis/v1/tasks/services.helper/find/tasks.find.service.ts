import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskModel, TaskDocument } from '../../classes/task.model';

import * as TaskDto from '../../classes/tasks.dto';
import { Task } from '../../classes/task.entity';

@Injectable()
export class TasksFindService {
	constructor (@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>) {}

	async findTasksByListId (getTasksInput: TaskDto.GetTasksInput): Promise<Task[]> {
		const { _listId } = getTasksInput;

		return await this.taskEntity.find({ _listId });
	}
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskModel, TaskDocument } from '../../classes/task.model';

import * as TaskDto from '../../classes/tasks.dto';

@Injectable()
export class TasksFindService {
	constructor (@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>) {}

	async findTasksByListId (getTasksInput: TaskDto.GetTasksInput): Promise<TaskDocument[]> {
		const { _listId } = getTasksInput;

		return await this.taskEntity.find({ _listId });
	}

	async findById ({ _taskId }: TaskDto.GetTaskByIdInput): Promise<TaskDocument> {
		const task = await this.taskEntity.findById(_taskId);

		if (task === null) {
			throw new HttpException('Not Found taskId', HttpStatus.NOT_FOUND);
		}

		return task;
	}
}

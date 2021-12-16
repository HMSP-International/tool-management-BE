import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskModel, TaskDocument } from '../../classes/task.model';

import * as TaskDto from '../../classes/tasks.dto';
import { Task } from '../../classes/task.entity';

@Injectable()
export class TasksDeleteService {
	constructor (@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>) {}

	async deleteTasks (deleteTaskInput: TaskDto.DeleteTaskInput): Promise<Task[]> {
		const { _taskIds } = deleteTaskInput;

		// check _listId
		const arrayPromise = [];
		_taskIds.forEach(_id => {
			const taskDeleted = this.taskEntity.findByIdAndDelete(_id);

			if (taskDeleted) {
				arrayPromise.push(taskDeleted);
			}
		});

		return await Promise.all(arrayPromise);
	}

	async deleteTasksByListId (_listId: string): Promise<void> {
		const tasks = await this.taskEntity.find({ _listId });
		const tasksDeleted = [];

		for (let task of tasks) {
			const deleted = this.taskEntity.findByIdAndDelete(task._id);

			tasksDeleted.push(deleted);
		}

		await Promise.all(tasksDeleted);
	}
}

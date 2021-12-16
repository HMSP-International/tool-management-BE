import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListsService } from '../lists/lists.service';
import { Task } from './task.entity';
import { TaskDocument, TaskModel } from './task.model';
import * as TaskDto from './tasks.dto';

@Injectable()
export class TasksService {
	constructor (
		@InjectModel(TaskModel.name) private taskEntity: Model<TaskDocument>,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
	) {}

	async getTasksByListId (getTasksInput: TaskDto.GetTasksInput): Promise<Task[]> {
		const { _listId } = getTasksInput;

		return await this.taskEntity.find({ _listId });
	}

	async createTask (getTasksInput: TaskDto.CreateTaskInput): Promise<Task> {
		const { _listId, name } = getTasksInput;

		// check _listId
		await this.listsService.findById(_listId);

		const newTask = new this.taskEntity({ _listId, name });

		return await newTask.save();
	}

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

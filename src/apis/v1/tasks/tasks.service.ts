import { Injectable } from '@nestjs/common';

import { Task } from './classes/task.entity';
import * as TaskDto from './classes/tasks.dto';

import { TasksCreateService } from './services.helper/create/tasks.create.service';
import { TasksDeleteService } from './services.helper/delete/tasks.delete.service';
import { TasksFindService } from './services.helper/find/tasks.find.service';

@Injectable()
export class TasksService {
	constructor (
		private readonly tasksCreateService: TasksCreateService,
		private readonly tasksDeleteService: TasksDeleteService,
		private readonly tasksFindService: TasksFindService,
	) {}

	async findTasksByListId (getTasksInput: TaskDto.GetTasksInput): Promise<Task[]> {
		return await this.tasksFindService.findTasksByListId(getTasksInput);
	}

	async createTask (getTasksInput: TaskDto.CreateTaskInput): Promise<Task> {
		return await this.tasksCreateService.createTask(getTasksInput);
	}

	async deleteTasks (deleteTaskInput: TaskDto.DeleteTaskInput): Promise<Task[]> {
		return await this.tasksDeleteService.deleteTasks(deleteTaskInput);
	}

	async deleteTasksByListId (_listId: string): Promise<void> {
		return await this.tasksDeleteService.deleteTasksByListId(_listId);
	}
}

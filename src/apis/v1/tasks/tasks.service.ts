import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
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

	async findTasksByListId (getTasksInput: TaskDto.GetTasksInput) {
		return await this.tasksFindService.findTasksByListId(getTasksInput);
	}

	async createTask (getTasksInput: TaskDto.CreateTaskInput, user: IPayLoadToken) {
		return await this.tasksCreateService.createTask(getTasksInput, user);
	}

	async deleteTasks (deleteTaskInput: TaskDto.DeleteTaskInput, user: IPayLoadToken) {
		return await this.tasksDeleteService.deleteTasks(deleteTaskInput, user);
	}

	async deleteTasksByListId (_listId: string) {
		return await this.tasksDeleteService.deleteTasksByListId(_listId);
	}
}

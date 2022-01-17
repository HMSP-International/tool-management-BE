import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as TaskDto from './classes/tasks.dto';

import { TasksCreateService } from './services.helper/create/tasks.create.service';
import { TasksDeleteService } from './services.helper/delete/tasks.delete.service';
import { TasksFindService } from './services.helper/find/tasks.find.service';
import { TasksPutService } from './services.helper/put/tasks.put.service';
import { TasksResolverFieldService } from './services.helper/resolvedField/tasks.resolveField.service';

@Injectable()
export class TasksService {
	constructor (
		private readonly tasksCreateService: TasksCreateService,
		private readonly tasksDeleteService: TasksDeleteService,
		private readonly tasksFindService: TasksFindService,
		private readonly tasksPutService: TasksPutService,
		private readonly tasksResolverFieldService: TasksResolverFieldService,
	) {}

	findTasksByListId (getTasksInput: TaskDto.GetTasksInput) {
		return this.tasksFindService.findTasksByListId(getTasksInput);
	}

	findById (getTaskByIdInput: TaskDto.GetTaskByIdInput) {
		return this.tasksFindService.findById(getTaskByIdInput);
	}

	createTask (getTasksInput: TaskDto.CreateTaskInput, user: IPayLoadToken) {
		return this.tasksCreateService.createTask(getTasksInput, user);
	}

	deleteTasks (deleteTaskInput: TaskDto.DeleteTaskInput, user: IPayLoadToken) {
		return this.tasksDeleteService.deleteTasks(deleteTaskInput, user);
	}

	deleteTasksByListId (_listId: string) {
		return this.tasksDeleteService.deleteTasksByListId(_listId);
	}

	removeComment (_taskId: string, _commentId: string) {
		return this.tasksDeleteService.removeComment(_taskId, _commentId);
	}

	changeTaskName (changeTaskNameInput: TaskDto.ChangeTaskNameInput, user: IPayLoadToken) {
		return this.tasksPutService.changeTaskName(changeTaskNameInput, user);
	}

	changeAssignee (changeAssigneeInput: TaskDto.ChangeAssigneeInput, user: IPayLoadToken) {
		return this.tasksPutService.changeAssignee(changeAssigneeInput, user);
	}

	changeDescriptions (changeAssigneeInput: TaskDto.ChangeDescriptionsInput, user: IPayLoadToken) {
		return this.tasksPutService.changeDescriptions(changeAssigneeInput, user);
	}

	changeListOfTask (changeListOfTaskInput: TaskDto.ChangeListOfTaskInput, user: IPayLoadToken) {
		return this.tasksPutService.changeListOfTask(changeListOfTaskInput, user);
	}

	changeListOfTaskWithDragAndDropInOneList (
		changeListOfTaskWithDragAndDropInput: TaskDto.ChangeListOfTaskWithDragAndDropInput,
		user: IPayLoadToken,
	) {
		return this.tasksPutService.changeListOfTaskWithDragAndDropInOneList(
			changeListOfTaskWithDragAndDropInput,
			user,
		);
	}

	getProject (_id: string) {
		return this.tasksResolverFieldService.getProject(_id);
	}

	getUser (_id: string) {
		return this.tasksResolverFieldService.getUser(_id);
	}

	getComments (ids: string[]) {
		return this.tasksResolverFieldService.getComments(ids);
	}
}

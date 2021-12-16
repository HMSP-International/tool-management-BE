import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './classes/task.entity';
import * as TaskDto from './classes/tasks.dto';

@Resolver(() => Task)
export class TasksResolver {
	constructor (private readonly tasksService: TasksService) {}

	@Mutation(() => [ Task ])
	getTasksByListId (@Args('getTasksInput') getTasksInput: TaskDto.GetTasksInput) {
		return this.tasksService.findTasksByListId(getTasksInput);
	}

	@Mutation(() => Task)
	createTask (@Args('createTaskInput') createTaskInput: TaskDto.CreateTaskInput) {
		return this.tasksService.createTask(createTaskInput);
	}

	@Mutation(() => [ Task ])
	deleteTasks (@Args('deleteTaskInput') deleteTaskInput: TaskDto.DeleteTaskInput) {
		return this.tasksService.deleteTasks(deleteTaskInput);
	}
}

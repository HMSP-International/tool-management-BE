import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './classes/task.entity';
import * as TaskDto from './classes/tasks.dto';
import { CurrentUser } from 'common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Resolver(() => Task)
export class TasksResolver {
	constructor (private readonly tasksService: TasksService) {}

	@Mutation(() => [ Task ])
	getTasksByListId (@Args('getTasksInput') getTasksInput: TaskDto.GetTasksInput, @CurrentUser() user: IPayLoadToken) {
		return this.tasksService.findTasksByListId(getTasksInput);
	}

	@Mutation(() => Task)
	createTask (@Args('createTaskInput') createTaskInput: TaskDto.CreateTaskInput, @CurrentUser() user: IPayLoadToken) {
		return this.tasksService.createTask(createTaskInput, user);
	}

	@Mutation(() => [ Task ])
	deleteTasks (
		@Args('deleteTaskInput') deleteTaskInput: TaskDto.DeleteTaskInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.tasksService.deleteTasks(deleteTaskInput, user);
	}
}

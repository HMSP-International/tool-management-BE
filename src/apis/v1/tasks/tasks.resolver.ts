import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './classes/task.entity';
import * as TaskDto from './classes/tasks.dto';
import { CurrentUser } from 'common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { User } from '../users/classes/user.entity';
import { Project } from '../projects/classes/project.entity';

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

	@Mutation(() => Task)
	changeTaskName (
		@Args('changeTaskNameInput') changeTaskNameInput: TaskDto.ChangeTaskNameInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.tasksService.changeTaskName(changeTaskNameInput, user);
	}

	@Mutation(() => Task)
	changeAssignee (
		@Args('changeAssigneeInput') changeAssigneeInput: TaskDto.ChangeAssigneeInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.tasksService.changeAssignee(changeAssigneeInput, user);
	}

	@ResolveField(() => Project)
	_projectId (@Parent() task: Task) {
		return this.tasksService.getProject(task._projectId);
	}

	@ResolveField(() => User)
	assignee (@Parent() task: Task) {
		return this.tasksService.getUser(task.assignee);
	}

	@ResolveField(() => User)
	reporter (@Parent() task: Task) {
		return this.tasksService.getUser(task.reporter);
	}
}

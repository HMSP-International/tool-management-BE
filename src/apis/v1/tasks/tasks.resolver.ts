import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task, DragAndDrop } from './classes/task.entity';
import * as TaskDto from './classes/tasks.dto';
import { CurrentUser } from 'common/decorator/CurrentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { User } from '../users/classes/user.entity';
import { Project } from '../projects/classes/project.entity';
import { Comment } from '../comments/classes/comment.entity';

@Resolver(() => Task)
export class TasksResolver {
	constructor (private readonly tasksService: TasksService) {}

	@Mutation(() => [ Task ])
	getTasksByListId (@Args('getTasksInput') getTasksInput: TaskDto.GetTasksInput) {
		return this.tasksService.findTasksByListId(getTasksInput);
	}

	@Mutation(() => Task)
	getTaskById (@Args('getTaskByIdInput') getTaskByIdInput: TaskDto.GetTaskByIdInput) {
		return this.tasksService.findById(getTaskByIdInput);
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

	@Mutation(() => Task)
	changeDescriptions (
		@Args('changeDescriptionsInput') changeDescriptionsInput: TaskDto.ChangeDescriptionsInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.tasksService.changeDescriptions(changeDescriptionsInput, user);
	}

	@Mutation(() => Task)
	changeListOfTask (
		@Args('changeListOfTaskInput') changeListOfTaskInput: TaskDto.ChangeListOfTaskInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.tasksService.changeListOfTask(changeListOfTaskInput, user);
	}

	@Mutation(() => DragAndDrop)
	changeListOfTaskWithDragAndDropInOneList (
		@Args('changeListOfTaskWithDragAndDropInput')
		changeListOfTaskWithDragAndDropInput: TaskDto.ChangeListOfTaskWithDragAndDropInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.tasksService.changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropInput, user);
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

	@ResolveField(() => [ Comment ])
	comments (@Parent() task: Task) {
		return this.tasksService.getComments(task.comments);
	}
}

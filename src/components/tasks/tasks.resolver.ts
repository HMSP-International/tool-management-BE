import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Resolver(() => Task)
export class TasksResolver {
	constructor (private readonly tasksService: TasksService) {}

	@Query(() => [ Task ])
	getTasks (
		@Args('_idList', { type: () => Int })
		id: number,
	) {
		return this.tasksService.findAll();
	}

	@Query(() => Task, { name: 'task' })
	findOne (
		@Args('id', { type: () => Int })
		id: number,
	) {
		return this.tasksService.findOne(id);
	}

	@Mutation(() => Task)
	removeTask (
		@Args('id', { type: () => Int })
		id: number,
	) {
		return this.tasksService.remove(id);
	}
}

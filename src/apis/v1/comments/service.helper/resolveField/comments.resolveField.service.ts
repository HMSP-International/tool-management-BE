import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
// services
import { UsersService } from 'apis/v1/users/users.service';
import { TasksService } from 'apis/v1/tasks/tasks.service';
// documents
import { UserDocument } from 'apis/v1/users/classes/user.model';
import { TaskDocument } from 'apis/v1/tasks/classes/task.model';

@Injectable()
export class CommentsResolverFieldService {
	constructor (
		@Inject(forwardRef(() => UsersService))
		private usersService: UsersService,
		@Inject(forwardRef(() => TasksService))
		private tasksService: TasksService,
	) {}

	async getTask (_taskId: string): Promise<TaskDocument> {
		return await this.tasksService.findById({ _taskId });
	}

	async getUser (_id: string): Promise<UserDocument> {
		const user = await this.usersService.findById(_id);
		if (user === null) throw new HttpException('_id user not found', HttpStatus.BAD_REQUEST);
		return user;
	}
}

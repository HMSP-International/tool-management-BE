import { ObjectType, Field } from '@nestjs/graphql';
import { Task } from 'apis/v1/tasks/classes/task.entity';
import { User } from 'apis/v1/users/classes/user.entity';

@ObjectType()
export class Comment {
	@Field(() => String)
	_id: string;

	@Field(() => Task)
	_taskId: string;

	@Field(() => User)
	_userId: string;

	@Field(() => String)
	content: string;
}

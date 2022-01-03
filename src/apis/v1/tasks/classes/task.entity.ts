import { ObjectType, Field } from '@nestjs/graphql';
import { Project } from 'apis/v1/projects/classes/project.entity';
import { User } from 'apis/v1/users/classes/user.entity';
import { Timestamp } from './timestamp';

@ObjectType()
export class Task {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	_listId: string;

	@Field(() => Number)
	order: number;

	@Field(() => User)
	reporter: string;

	@Field(() => Timestamp)
	timestamp: Timestamp;

	@Field(() => Project)
	_projectId: string;

	@Field(() => User, { nullable: true })
	assignee: string;
}

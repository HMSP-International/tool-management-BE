import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType()
export class GetTasksInput {
	@IsString()
	@Field(() => String)
	_listId: string;
}

@InputType()
export class CreateTaskInput {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_listId: string;

	@Length(24, 24)
	@IsString()
	@Field(() => String)
	assignee: string;

	@Length(1)
	@IsString()
	@Field(() => String)
	name: string;
}

@InputType()
export class DeleteTaskInput {
	@Field(() => [ String ])
	_taskIds: string[];
}

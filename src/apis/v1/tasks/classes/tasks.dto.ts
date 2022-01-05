import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length, IsOptional, IsArray } from 'class-validator';

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

	@IsOptional()
	@Length(24, 24)
	@IsString()
	@Field(() => String, { nullable: true })
	assignee: string;

	@Length(1)
	@IsString()
	@Field(() => String)
	name: string;

	@IsArray()
	@Field(() => [ String ])
	descriptions: string[];
}

@InputType()
export class DeleteTaskInput {
	@Field(() => [ String ])
	_taskIds: string[];
}

@InputType()
export class ChangeTaskNameInput {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_taskId: string;

	@Length(1)
	@IsString()
	@Field(() => String)
	name: string;
}

@InputType()
export class ChangeAssigneeInput {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_taskId: string;

	@Length(24, 24)
	@IsString()
	@Field(() => String)
	assignee: string;
}

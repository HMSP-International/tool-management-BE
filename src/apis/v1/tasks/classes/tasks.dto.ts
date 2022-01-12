import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length, IsOptional } from 'class-validator';

@InputType()
export class GetTasksInput {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_listId: string;

	@Field(() => [ String ])
	_userIds: string[];
}

@InputType()
export class GetTaskByIdInput {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_taskId: string;
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

	@Length(0, 1000)
	@IsString()
	@Field(() => String)
	descriptions: string;
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

@InputType()
export class ChangeDescriptionsInput {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_taskId: string;

	@Length(0, 1000)
	@IsString()
	@Field(() => String)
	descriptions: string;
}

@InputType()
export class ChangeListOfTaskInput {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_taskId: string;

	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_listId: string;
}

import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length, IsOptional, IsBoolean } from 'class-validator';

@InputType()
export class CreateListInput {
	@IsString()
	@Field(() => String)
	_projectId: string;

	@IsString()
	@Length(1, 30)
	@Field(() => String)
	name: string;
}

@InputType()
export class GetListsInput {
	@IsOptional()
	@IsString()
	@Field(() => String)
	_projectId: string;
}

@InputType()
export class PutListsFormatedInput {
	[type: string]: string;
}

@InputType()
export class DeleteListInput {
	@Field(() => String)
	_listId: string;
}

@InputType()
export class ChangeNameListInput {
	@Field(() => String)
	name: string;

	@Field(() => String)
	_listId: string;
}

import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType()
export class CreateCommentInput {
	@IsString()
	@Length(24, 24)
	@Field(() => String)
	_taskId: string;

	@IsString()
	@Length(1, 1000)
	@Field(() => String)
	content: string;
}

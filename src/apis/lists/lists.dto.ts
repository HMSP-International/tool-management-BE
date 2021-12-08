import { InputType, Field } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

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

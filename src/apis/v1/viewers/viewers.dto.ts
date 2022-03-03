import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class AddNewEmailInput {
	@IsString()
	@Field(() => String)
	email: string;
}

@InputType()
export class RemoveEmailInput {
	@IsString()
	@Field(() => String)
	email: string;
}

@InputType()
export class CheckEmailInViewerInput {
	@IsString()
	@Field(() => String)
	email: string;

	@IsString()
	@Field(() => String)
	_userId: string;
}

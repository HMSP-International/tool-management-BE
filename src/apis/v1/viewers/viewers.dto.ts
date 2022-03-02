import { InputType, Field } from '@nestjs/graphql';
import { Length, IsEmail, IsString } from 'class-validator';

@InputType()
export class AddNewEmailInput {
	@IsEmail()
	@Length(4, 40)
	@Field(() => String)
	_userId: string;

	@IsString()
	@Field(() => String)
	viewer: string;
}

@InputType()
export class RemoveEmailInput {
	@IsEmail()
	@Length(4, 40)
	@Field(() => String)
	_userId: string;

	@IsString()
	@Field(() => String)
	viewer: string;
}

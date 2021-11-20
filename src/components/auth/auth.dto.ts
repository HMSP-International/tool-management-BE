import { InputType, Field } from '@nestjs/graphql';
import { Length, IsEmail, IsString } from 'class-validator';

@InputType()
export class SigninInput {
	@IsEmail()
	@Length(4, 40)
	@Field(() => String)
	email: string;

	@IsString()
	@Length(6, 20)
	@Field(() => String)
	password: string;
}

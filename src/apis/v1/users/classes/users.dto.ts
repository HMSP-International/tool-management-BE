import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Length, IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {
	@Field(() => String, { nullable: true })
	avatar: string;

	@Length(0, 40)
	@IsEmail()
	@Field(() => String)
	email: string;

	@IsString()
	@Length(6, 20)
	@Field(() => String)
	password: string;

	@IsOptional()
	@IsString()
	@Field(() => String)
	displayName: string;

	@IsOptional()
	@Field(() => String)
	_roleId: string;

	@IsOptional()
	@IsString()
	@Field(() => String)
	department: string;

	@IsOptional()
	@IsString()
	@Field(() => String)
	position: string;

	@IsOptional()
	@IsString()
	@Field(() => String)
	title: string;
}

@InputType()
export class DeleteUserInput {
	@Field(() => String)
	_id: string;
}

@InputType()
export class ChangePasswordInput {
	@IsString()
	@Length(6, 20)
	@Field(() => String)
	currentPassword: string;

	@IsString()
	@Length(6, 20)
	@Field(() => String)
	newPassword: string;
}

@InputType()
export class ChangePasswordInputByAdmin {
	@IsString()
	@Field(() => String)
	_id: string;

	@IsString()
	@Length(6, 20)
	@Field(() => String)
	newPassword: string;
}

@InputType()
export class ChangeInformationInput {
	@Length(1, 30)
	@IsOptional()
	@IsString()
	@Field(() => String)
	displayName: string;
}

@InputType()
export class ChangeInformationInputByAdmin {
	@Length(1, 30)
	@IsString()
	@Field(() => String)
	displayName: string;

	@IsString()
	@Field(() => String)
	_id: string;

	@Length(0, 40)
	@IsEmail()
	@IsString()
	@Field(() => String)
	email: string;

	@IsString()
	@Field(() => String)
	title: string;

	@IsString()
	@Field(() => String)
	position: string;

	@IsString()
	@Field(() => String)
	department: string;

	@IsString()
	@Field(() => String)
	_roleId: string;
}

@ObjectType()
export class DeleteUserOutput {
	@Field(() => Boolean)
	status: boolean;
}

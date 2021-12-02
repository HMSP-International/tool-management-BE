import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Length, IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';
import { ROLE } from '../../common/decorator/role.decorator';

@InputType()
export class CreateUserInput {
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
	@Field(() => String, { nullable: true })
	displayName: string;

	@IsOptional()
	@IsEnum(ROLE, { message: 'this role only: ' + JSON.stringify(Object.values(ROLE)) })
	@Field(() => String, { nullable: true })
	role: string;

	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	department: string;

	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
	position: string;

	@IsOptional()
	@IsString()
	@Field(() => String, { nullable: true })
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
	@IsEnum(ROLE, { message: 'this role only: ' + JSON.stringify(Object.values(ROLE)) })
	@Field(() => String)
	role: string;
}

@ObjectType()
export class DeleteUserOutput {
	@Field(() => Boolean)
	status: boolean;
}

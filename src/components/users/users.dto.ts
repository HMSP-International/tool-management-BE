import { InputType, Field } from '@nestjs/graphql';
import { Length, IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';
import { ROLE } from '../../common/decorator/role.decorator';

@InputType()
export class CreateUserInput {
	@Length(4, 40)
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
	@IsString()
	@Field(() => String)
	displayName: string;
}

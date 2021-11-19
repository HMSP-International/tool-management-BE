import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { Length, IsEmail, IsString, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { Model } from 'mongoose';

export enum ROLES {
	superAdmin = 'SUPER_ADMIN',
	admin = 'ADMIN',
	member = 'MEMBER',
	default = member,
}

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
	@IsEnum(ROLES)
	@Field(() => String, { nullable: true })
	role: string;
}

@ArgsType()
export class GetUserArgs {
	@Field()
	@IsNotEmpty()
	userId: string;
}


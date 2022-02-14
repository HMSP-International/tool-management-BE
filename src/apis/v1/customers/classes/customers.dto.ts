import { InputType, Field } from '@nestjs/graphql';
import { Length, IsEmail, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateCustomerByAdminInput {
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
}

// @InputType()
// export class DeleteCustomerInput {
// 	@Field(() => String)
// 	_id: string;
// }

// @InputType()
// export class ChangePasswordCustomerInputByAdmin {
// 	@IsString()
// 	@Field(() => String)
// 	_id: string;

// 	@IsString()
// 	@Length(6, 20)
// 	@Field(() => String)
// 	newPassword: string;
// }

// @InputType()
// export class ChangeInformationCustomerInputByAdmin {
// 	@Length(1, 30)
// 	@IsString()
// 	@Field(() => String)
// 	displayName: string;

// 	@IsString()
// 	@Field(() => String)
// 	_id: string;

// 	@Length(0, 40)
// 	@IsEmail()
// 	@IsString()
// 	@Field(() => String)
// 	email: string;

// 	@IsString()
// 	@Field(() => String)
// 	title: string;

// 	@IsString()
// 	@Field(() => String)
// 	position: string;

// 	@IsString()
// 	@Field(() => String)
// 	department: string;

// 	@IsString()
// 	@Field(() => String)
// 	_roleId: string;
// }

// @ObjectType()
// export class DeleteCustomerOutput {
// 	@Field(() => Boolean)
// 	status: boolean;
// }

// @InputType()
// export class GetCustomerByIdInput {
// 	@IsString()
// 	@Length(24, 24)
// 	@Field(() => String)
// 	_userId: string;
// }

// @InputType()
// export class ChangeAvatarCustomerInput {
// 	@IsString()
// 	@Field(() => String)
// 	avatar: string;
// }

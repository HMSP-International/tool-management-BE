import { InputType, Int, Field } from '@nestjs/graphql';
import { Length, IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';
import { ROLE } from '../../common/decorator/role.decorator';

@InputType()
export class InviteSpaceInput {
	@IsString()
	@Field(() => String)
	_workSpaceId: string;

	@IsString()
	@Field(() => String)
	_memberId: string;

	@IsEnum(ROLE, { message: 'this role only: ' + JSON.stringify(Object.values(ROLE)) })
	@Field(() => String)
	role: string;
}

@InputType()
export class VerifyInviteSpaceInput {
	@Field(() => String)
	jwt: string;
}

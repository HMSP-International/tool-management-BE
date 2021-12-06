import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, IsEnum } from 'class-validator';
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

@InputType()
export class PutInvitedSpaceInput {
	@IsEmail()
	@Field(() => [ String ])
	email: [string];
}

import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString, IsEnum, IsArray } from 'class-validator';
import { ROLE } from '../../../../common/decorator/permissions.decorator';

@InputType()
export class InviteSpaceInput {
	@IsString()
	@Field(() => String)
	_workSpaceId: string;

	@IsString()
	@Field(() => String)
	_memberId: string;

	@IsEnum(ROLE, { message: 'this role only: ' + JSON.stringify(Object.values(ROLE)) })
	@Field(() => String, { nullable: true })
	role: string;
}

@InputType()
export class VerifyInviteSpaceInput {
	@Field(() => String)
	jwt: string;
}

@InputType()
export class PutInvitedSpaceInput {
	@IsString()
	@Field(() => String)
	_workSpaceId: string;

	@IsArray()
	@Type(() => String)
	@Field(() => [ String ])
	_memberIds: [string];
}

@InputType()
export class FindUsersBySpaceId {
	@Field(() => [ String ])
	_spaceId: string;
}

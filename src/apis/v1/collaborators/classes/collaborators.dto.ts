import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsString, IsArray } from 'class-validator';

@InputType()
export class InviteSpaceInput {
	@IsString()
	@Field(() => String)
	_workSpaceId: string;

	@IsString()
	@Field(() => String)
	_memberId: string;

	@IsString()
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

@InputType()
export class DeleteByUserAndSpaceInput {
	@Field(() => String)
	_workSpaceId: string;

	@Field(() => String)
	_memberId: string;
}

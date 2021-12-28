import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEnum } from 'class-validator';

enum ROLE {
	member,
	admin,
}

@InputType()
export class CreatePaticipantInput {
	@IsString()
	@Field(() => String)
	_memberId: string;

	@IsString()
	@Field(() => String)
	_projectId: string;

	@IsString()
	@IsEnum(ROLE, { message: 'only have values ​​like ' + JSON.stringify(ROLE) })
	@Field(() => String)
	role: string;
}

@InputType()
export class ProjectsBySpacesAndMemberInput {
	@Field(() => [ String ])
	_spaceIds: string[];
}

@InputType()
export class DeletePaticipantInput {
	@Field(() => String)
	_memberId: string;

	@Field(() => String)
	_projectId: string;
}

@InputType()
export class GetUsersBelongProjectInput {
	@Field(() => String)
	_projectId: string;
}

@InputType()
export class ChangeRoleOfMemberInput {
	@IsString()
	@Field(() => String)
	_collaboratorId: string;

	@IsString()
	@Field(() => String)
	_projectId: string;

	@IsString()
	@IsEnum(ROLE, { message: 'only have values ​​like ' + JSON.stringify(ROLE) })
	@Field(() => String)
	role: string;
}

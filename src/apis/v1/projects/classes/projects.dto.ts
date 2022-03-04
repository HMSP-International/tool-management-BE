import { InputType, Field } from '@nestjs/graphql';
import { Length, IsOptional } from 'class-validator';

@InputType()
export class CreateProjectInput {
	@Length(1, 20)
	@Field(() => String)
	name: string;

	@Field(() => String)
	_spaceId: string;
}

@InputType()
export class GetProjectsInput {
	@Field(() => [ String ])
	_spacesId: [string];
}

@InputType()
export class GetProjectInput {
	@Field(() => String)
	_projectId: string;
}

@InputType()
export class DeleteProjectInput {
	@Field(() => String)
	_projectId: string;
}

@InputType()
export class ChangeNameProjectInput {
	@Field(() => String)
	_projectId: string;

	@Length(1, 20)
	@Field(() => String)
	name: string;
}

@InputType()
export class FindByMemberIdAndSpaceIdInput {
	@Length(24, 24)
	@Field(() => String)
	_memberId: string;

	@IsOptional()
	@Field(() => String, { nullable: true })
	_spaceId: string;
}

@InputType()
export class UpdateSTTInput {
	@Length(24, 24)
	@Field(() => String)
	_projectId: string;

	@Length(24, 24)
	@Field(() => Number)
	stt: number;
}

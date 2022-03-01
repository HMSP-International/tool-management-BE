import { InputType, Field } from '@nestjs/graphql';
import { Length, IsString } from 'class-validator';

@InputType()
export class CreateSpaceInput {
	@IsString()
	@Length(1, 20)
	@Field(() => String)
	name: string;
}

@InputType()
export class ChangeNameSpaceInput {
	@IsString()
	@Field(() => String)
	_id: string;

	@IsString()
	@Length(1, 20)
	@Field(() => String)
	name: string;
}

@InputType()
export class DeleteSpaceInput {
	@IsString()
	@Field(() => String)
	_spaceId: string;
}

@InputType()
export class FindByMemberId {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_memberId: string;
}

@InputType()
export class FindByProjectId {
	@Length(24, 24)
	@IsString()
	@Field(() => String)
	_projectId: string;
}

@InputType()
export class AddNewViewerInput {
	@Length(24, 24)
	@Field(() => String)
	_spaceId: string;

	@Field(() => String)
	email: string;
}

@InputType()
export class RemoveViewerInput {
	@Length(24, 24)
	@Field(() => String)
	_spaceId: string;

	@Field(() => String)
	email: string;
}

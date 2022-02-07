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

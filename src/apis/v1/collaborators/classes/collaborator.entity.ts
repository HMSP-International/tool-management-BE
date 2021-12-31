import { ObjectType, Field } from '@nestjs/graphql';
import { Space } from 'apis/v1/spaces/classes/space.entity';
import { User } from 'apis/v1/users/classes/user.entity';

@ObjectType()
export class Collaborator {
	@Field(() => String)
	_id: string;

	@Field(() => Space)
	_workSpaceId: string;

	@Field(() => User)
	_memberId: string;

	@Field(() => String)
	_adminId: string;

	@Field(() => String)
	role: string;

	@Field(() => Boolean)
	confirmEmail: boolean;
}

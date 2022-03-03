import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'apis/v1/users/classes/user.entity';

@ObjectType()
export class Viewer {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	_userId: string;

	@Field(() => [ String ])
	emails: string[];
}

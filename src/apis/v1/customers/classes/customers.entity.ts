import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'apis/v1/users/classes/user.entity';

@ObjectType()
export class Customer extends User{
	@Field(() => String)
	_id: string;

	@Field(() => String)
	avatar: string;

	@Field(() => String)
	email: string;

	@Field(() => String, { nullable: true })
	password: string;

	@Field(() => String)
	displayName: string;
}

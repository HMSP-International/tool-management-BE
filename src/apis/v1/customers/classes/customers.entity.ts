import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Customer {
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

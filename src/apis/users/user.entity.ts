import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	email: string;

	@Field(() => String, { nullable: true })
	password: string;

	@Field(() => String)
	displayName: string;

	@Field(() => String)
	role: string;

	@Field(() => String)
	department: string;

	@Field(() => String)
	position: string;

	@Field(() => String)
	title: string;
}

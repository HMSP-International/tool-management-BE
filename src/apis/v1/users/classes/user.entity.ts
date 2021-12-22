import { ObjectType, Field } from '@nestjs/graphql';
import { Role } from '../../roles/classes/role.entity';

@ObjectType()
export class User {
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

	@Field(() => Role)
	_roleId: string;

	@Field(() => String)
	department: string;

	@Field(() => String)
	position: string;

	@Field(() => String)
	title: string;
}

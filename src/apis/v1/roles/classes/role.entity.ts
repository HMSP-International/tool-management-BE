import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Role {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	name: string;
}

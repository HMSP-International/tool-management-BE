import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Permission {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	_roleId: string;

	@Field(() => String)
	resolverName: string;
}

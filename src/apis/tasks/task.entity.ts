import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Task {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	_listId: string;
}

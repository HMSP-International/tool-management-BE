import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Project {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	owner: string;

	@Field(() => String)
	_spaceId: string;

	@Field(() => Number)
	order: number;
}

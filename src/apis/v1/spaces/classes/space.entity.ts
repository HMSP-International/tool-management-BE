import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Space {
	@Field(() => String)
	_id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	owner: string;

	@Field(() => Number)
	order: number;

	@Field(() => [ String ], { nullable: true })
	viewers: string[];
}

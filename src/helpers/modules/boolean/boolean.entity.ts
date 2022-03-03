import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BooleanEntity {
	@Field(() => Boolean)
	boolean: boolean;
}

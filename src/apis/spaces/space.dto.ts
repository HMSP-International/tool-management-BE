import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CreateSpaceInput {
	@Length(1, 20)
	@Field(() => String)
	name: string;
}

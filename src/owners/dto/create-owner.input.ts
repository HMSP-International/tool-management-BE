import { InputType, Field } from '@nestjs/graphql';
import { Length, IsAlpha } from 'class-validator';

@InputType()
export class CreateOwnerInput {
	@IsAlpha('Need Alpah')
	@Length(2, 30)
	@Field()
	name: string;
}

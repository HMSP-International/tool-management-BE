import { InputType, Field } from '@nestjs/graphql';
import { Length, IsAlpha } from 'class-validator';

@InputType()
export class CreatePetDto {
	@IsAlpha()
	@Length(2, 30)
	@Field()
	name: string;

	@Length(2, 30)
	@Field()
	type: string;

	@Field() ownerId: string;
}

import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePaticipantInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

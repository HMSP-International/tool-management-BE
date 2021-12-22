import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Paticipant {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Sender {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

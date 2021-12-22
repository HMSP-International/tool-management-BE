import { CreatePaticipantInput } from './create-paticipant.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePaticipantInput extends PartialType(CreatePaticipantInput) {
  @Field(() => Int)
  id: number;
}

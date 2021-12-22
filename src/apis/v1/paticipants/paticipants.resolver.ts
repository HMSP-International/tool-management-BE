import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PaticipantsService } from './paticipants.service';
import { Paticipant } from './entities/paticipant.entity';
import { CreatePaticipantInput } from './dto/create-paticipant.input';
import { UpdatePaticipantInput } from './dto/update-paticipant.input';

@Resolver(() => Paticipant)
export class PaticipantsResolver {
  constructor(private readonly paticipantsService: PaticipantsService) {}

  @Mutation(() => Paticipant)
  createPaticipant(@Args('createPaticipantInput') createPaticipantInput: CreatePaticipantInput) {
    return this.paticipantsService.create(createPaticipantInput);
  }

  @Query(() => [Paticipant], { name: 'paticipants' })
  findAll() {
    return this.paticipantsService.findAll();
  }

  @Query(() => Paticipant, { name: 'paticipant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.paticipantsService.findOne(id);
  }

  @Mutation(() => Paticipant)
  updatePaticipant(@Args('updatePaticipantInput') updatePaticipantInput: UpdatePaticipantInput) {
    return this.paticipantsService.update(updatePaticipantInput.id, updatePaticipantInput);
  }

  @Mutation(() => Paticipant)
  removePaticipant(@Args('id', { type: () => Int }) id: number) {
    return this.paticipantsService.remove(id);
  }
}

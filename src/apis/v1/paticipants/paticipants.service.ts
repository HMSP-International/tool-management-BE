import { Injectable } from '@nestjs/common';
import { CreatePaticipantInput } from './dto/create-paticipant.input';
import { UpdatePaticipantInput } from './dto/update-paticipant.input';

@Injectable()
export class PaticipantsService {
  create(createPaticipantInput: CreatePaticipantInput) {
    return 'This action adds a new paticipant';
  }

  findAll() {
    return `This action returns all paticipants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paticipant`;
  }

  update(id: number, updatePaticipantInput: UpdatePaticipantInput) {
    return `This action updates a #${id} paticipant`;
  }

  remove(id: number) {
    return `This action removes a #${id} paticipant`;
  }
}

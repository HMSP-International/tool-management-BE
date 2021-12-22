import { Module } from '@nestjs/common';
import { PaticipantsService } from './paticipants.service';
import { PaticipantsResolver } from './paticipants.resolver';

@Module({
  providers: [PaticipantsResolver, PaticipantsService]
})
export class PaticipantsModule {}

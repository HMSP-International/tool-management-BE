import { Module } from '@nestjs/common';
import { PaticipantsService } from './paticipants.service';
import { PaticipantsResolver } from './paticipants.resolver';
import { PaticipantsCreateModule } from './services.helper/create/paticipants.create.module';
import { PaticipantsFindModule } from './services.helper/find/paticipants.find.module';
import { PaticipantsResolverFieldModule } from './services.helper/resolveField/paticipants.resolveField.module';

@Module({
	imports: [ PaticipantsCreateModule, PaticipantsFindModule, PaticipantsResolverFieldModule ],
	providers: [ PaticipantsResolver, PaticipantsService ],
})
export class PaticipantsModule {}

import { Module } from '@nestjs/common';
import { PaticipantsService } from './paticipants.service';
import { PaticipantsResolver } from './paticipants.resolver';
import { PaticipantsCreateModule } from './services.helper/create/paticipants.create.module';
import { PaticipantsDeleteModule } from './services.helper/delete/paticipants.delete.module';
import { PaticipantsFindModule } from './services.helper/find/paticipants.find.module';
import { PaticipantsPutModule } from './services.helper/put/paticipants.put.module';
import { PaticipantsResolverFieldModule } from './services.helper/resolveField/paticipants.resolveField.module';

@Module({
	imports:
		[
			PaticipantsCreateModule,
			PaticipantsDeleteModule,
			PaticipantsFindModule,
			PaticipantsPutModule,
			PaticipantsResolverFieldModule,
		],
	providers: [ PaticipantsResolver, PaticipantsService ],
	exports: [ PaticipantsService ],
})
export class PaticipantsModule {}

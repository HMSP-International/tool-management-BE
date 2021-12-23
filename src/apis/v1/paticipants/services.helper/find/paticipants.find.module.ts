import { Module } from '@nestjs/common';
// mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { PaticipantModel, PaticipantSchema } from '../../classes/paticipant.model';
// module
import { ProjectsModule } from '../../../projects/projects.module';
import { CollaboratorsModule } from '../../../collaborators/collaborators.module';
// services
import { PaticipantsFindService } from './paticipants.find.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: PaticipantModel.name, schema: PaticipantSchema } ]),
			CollaboratorsModule,
			ProjectsModule,
		],
	providers: [ PaticipantsFindService ],
	exports: [ PaticipantsFindService ],
})
export class PaticipantsFindModule {}

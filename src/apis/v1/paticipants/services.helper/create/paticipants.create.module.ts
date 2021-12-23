import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorsModule } from '../../../collaborators/collaborators.module';
import { ProjectsModule } from '../../../projects/projects.module';
import { PaticipantModel, PaticipantSchema } from '../../classes/paticipant.model';
import { PaticipantsCreateService } from './paticipants.create.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: PaticipantModel.name, schema: PaticipantSchema } ]),
			ProjectsModule,
			CollaboratorsModule,
		],
	providers: [ PaticipantsCreateService ],
	exports: [ PaticipantsCreateService ],
})
export class PaticipantsCreateModule {}

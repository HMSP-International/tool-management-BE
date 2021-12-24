import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from '../../../projects/projects.module';
import { CollaboratorsModule } from '../../../collaborators/collaborators.module';
import { PaticipantModel, PaticipantSchema } from '../../classes/paticipant.model';
import { PaticipantsDeleteService } from './paticipants.delete.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: PaticipantModel.name, schema: PaticipantSchema } ]),
			CollaboratorsModule,
			ProjectsModule,
		],
	providers: [ PaticipantsDeleteService ],
	exports: [ PaticipantsDeleteService ],
})
export class PaticipantsDeleteModule {}

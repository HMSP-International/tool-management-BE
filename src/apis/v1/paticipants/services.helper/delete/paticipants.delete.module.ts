import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from 'apis/v1/projects/projects.module';
import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
import { PaticipantModel, PaticipantSchema } from '../../classes/paticipant.model';
import { PaticipantsDeleteService } from './paticipants.delete.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: PaticipantModel.name, schema: PaticipantSchema } ]),
			forwardRef(() => CollaboratorsModule),
			forwardRef(() => ProjectsModule),
		],
	providers: [ PaticipantsDeleteService ],
	exports: [ PaticipantsDeleteService ],
})
export class PaticipantsDeleteModule {}

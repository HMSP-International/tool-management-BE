import { Module, forwardRef } from '@nestjs/common';
// mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { PaticipantModel, PaticipantSchema } from '../../classes/paticipant.model';
// module
import { ProjectsModule } from 'apis/v1/projects/projects.module';
import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
// services
import { PaticipantsFindService } from './paticipants.find.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: PaticipantModel.name, schema: PaticipantSchema } ]),
			forwardRef(() => CollaboratorsModule),
			forwardRef(() => ProjectsModule),
		],
	providers: [ PaticipantsFindService ],
	exports: [ PaticipantsFindService ],
})
export class PaticipantsFindModule {}

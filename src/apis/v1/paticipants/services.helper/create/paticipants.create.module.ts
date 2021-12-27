import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../../../users/users.module';
import { CollaboratorsModule } from '../../../collaborators/collaborators.module';
import { ProjectsModule } from '../../../projects/projects.module';
import { PaticipantModel, PaticipantSchema } from '../../classes/paticipant.model';
import { PaticipantsCreateService } from './paticipants.create.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: PaticipantModel.name, schema: PaticipantSchema } ]),
			forwardRef(() => ProjectsModule),
			forwardRef(() => CollaboratorsModule),
			forwardRef(() => UsersModule),
		],
	providers: [ PaticipantsCreateService ],
	exports: [ PaticipantsCreateService ],
})
export class PaticipantsCreateModule {}

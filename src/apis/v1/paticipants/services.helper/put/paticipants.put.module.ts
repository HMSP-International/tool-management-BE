import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorsModule } from '../../../collaborators/collaborators.module';
import { PaticipantModel, PaticipantSchema } from '../../classes/paticipant.model';
// modules
// services
import { PaticipantsPutService } from './paticipants.put.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: PaticipantModel.name, schema: PaticipantSchema } ]),
			forwardRef(() => CollaboratorsModule),
		],
	providers: [ PaticipantsPutService ],
	exports: [ PaticipantsPutService ],
})
export class PaticipantsPutModule {}

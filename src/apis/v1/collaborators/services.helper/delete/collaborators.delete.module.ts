import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// helpers
// mongoose
import { CollaboratorModel, CollaboratorSchema } from '../../classes/collaborator.model';
// Module
import { PaticipantsModule } from 'apis/v1/paticipants/paticipants.module';
// services
import { CollaboratorsDeleteService } from './collaborators.delete.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: CollaboratorModel.name, schema: CollaboratorSchema } ]),
			forwardRef(() => PaticipantsModule),
		],
	providers: [ CollaboratorsDeleteService ],
	exports: [ CollaboratorsDeleteService ],
})
export class CollaboratorsDeleteModule {}

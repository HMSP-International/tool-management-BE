import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// helpers
// mongoose
import { CollaboratorModel, CollaboratorSchema } from '../../classes/collaborator.model';
// Module
// services
import { CollaboratorsDeleteService } from './collaborators.delete.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: CollaboratorModel.name, schema: CollaboratorSchema } ]) ],
	providers: [ CollaboratorsDeleteService ],
	exports: [ CollaboratorsDeleteService ],
})
export class CollaboratorsDeleteModule {}

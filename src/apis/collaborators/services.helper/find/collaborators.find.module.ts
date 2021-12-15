import { Module } from '@nestjs/common';
// mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorModel, CollaboratorSchema } from '../../classes/collaborator.model';
// services
import { CollaboratorsFindService } from './collaborators.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: CollaboratorModel.name, schema: CollaboratorSchema } ]) ],
	providers: [ CollaboratorsFindService ],
	exports: [ CollaboratorsFindService ],
})
export class CollaboratorsFindModule {}

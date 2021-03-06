import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceModel, SpaceSchema } from '../../classes/space.model';
import { SpacesDeleteService } from './spaces.delete.service';
import { SpacesFindModule } from '../find/spaces.find.module';
import { ProjectsModule } from 'apis/v1/projects/projects.module';
import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: SpaceModel.name, schema: SpaceSchema } ]),
			SpacesFindModule,
			forwardRef(() => ProjectsModule),
			forwardRef(() => CollaboratorsModule),
		],
	providers: [ SpacesDeleteService ],
	exports: [ SpacesDeleteService ],
})
export class SpacesDeleteModule {}

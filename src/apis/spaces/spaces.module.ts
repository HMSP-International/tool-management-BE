import { forwardRef, Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesResolver } from './spaces.resolver';
import { SpaceModel, SpaceSchema } from './space.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from '../projects/projects.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: SpaceModel.name, schema: SpaceSchema } ]),
			forwardRef(() => ProjectsModule),
		],
	providers: [ SpacesResolver, SpacesService ],
	exports: [ SpacesService ],
})
export class SpacesModule {}

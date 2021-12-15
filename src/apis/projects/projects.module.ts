import { forwardRef, Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModel, ProjectSchema } from './project.model';
import { SpacesModule } from '../spaces/spaces.module';
import { ListsModule } from '../lists/lists.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ProjectModel.name, schema: ProjectSchema } ]),
			SpacesModule,
			forwardRef(() => ListsModule),
		],
	providers: [ ProjectsResolver, ProjectsService ],
	exports: [ ProjectsService ],
})
export class ProjectsModule {}

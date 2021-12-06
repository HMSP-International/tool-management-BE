import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './project.entity';
import { SpacesModule } from '../spaces/spaces.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: Project.name, schema: ProjectSchema } ]),
			SpacesModule,
		],
	providers: [ ProjectsResolver, ProjectsService ],
})
export class ProjectsModule {}

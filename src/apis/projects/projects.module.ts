import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModel, ProjectSchema } from './project.model';
import { SpacesModule } from '../spaces/spaces.module';

@Module({
	imports: [ MongooseModule.forFeature([ { name: ProjectModel.name, schema: ProjectSchema } ]), SpacesModule ],
	providers: [ ProjectsResolver, ProjectsService ],
})
export class ProjectsModule {}

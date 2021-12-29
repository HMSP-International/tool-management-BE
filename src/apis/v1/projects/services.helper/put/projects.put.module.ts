import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModel, ProjectSchema } from '../../classes/project.model';
import { ProjectsPutService } from './projects.put.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: ProjectModel.name, schema: ProjectSchema } ]) ],
	providers: [ ProjectsPutService ],
	exports: [ ProjectsPutService ],
})
export class ProjectsPutModule {}
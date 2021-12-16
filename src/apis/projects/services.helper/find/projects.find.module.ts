import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModel, ProjectSchema } from '../../classes/project.model';
import { ProjectsFindService } from './projects.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: ProjectModel.name, schema: ProjectSchema } ]) ],
	providers: [ ProjectsFindService ],
	exports: [ ProjectsFindService ],
})
export class ProjectsFindModule {}

import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListsModule } from '../../../lists/lists.module';
import { ProjectModel, ProjectSchema } from '../../classes/project.model';
import { ProjectsDeleteService } from './projects.delete.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ProjectModel.name, schema: ProjectSchema } ]),
			forwardRef(() => ListsModule),
		],
	providers: [ ProjectsDeleteService ],
	exports: [ ProjectsDeleteService ],
})
export class ProjectsDeleteModule {}

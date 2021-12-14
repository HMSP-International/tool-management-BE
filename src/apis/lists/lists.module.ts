import { Module, forwardRef } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsResolver } from './lists.resolver';
import { ListModel, ListSchema } from './list.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from '../projects/projects.module';
import { CollaboratorsModule } from '../collaborators/collaborators.module';
import { TasksModule } from '../tasks/tasks.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]),
			ProjectsModule,
			CollaboratorsModule,
			forwardRef(() => TasksModule),
		],
	providers: [ ListsResolver, ListsService ],
	exports: [ ListsService ],
})
export class ListsModule {}

import { Module, forwardRef } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsResolver } from './lists.resolver';
import { ListModel, ListSchema } from './list.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from '../projects/projects.module';
import { TasksModule } from '../tasks/tasks.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]),
			forwardRef(() => ProjectsModule),
			forwardRef(() => TasksModule),
		],
	providers: [ ListsResolver, ListsService ],
	exports: [ ListsService ],
})
export class ListsModule {}

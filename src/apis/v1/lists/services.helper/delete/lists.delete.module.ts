import { forwardRef, Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ListModel, ListSchema } from '../../classes/list.model';

import { ListsDeleteService } from './lists.delete.service';

import { ListsPutModule } from '../put/lists.put.module';
import { TasksModule } from 'apis/v1/tasks/tasks.module';
import { ProjectsModule } from 'apis/v1/projects/projects.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]),
			forwardRef(() => TasksModule),
			ListsPutModule,
			forwardRef(() => ProjectsModule),
		],
	providers: [ ListsDeleteService ],
	exports: [ ListsDeleteService ],
})
export class ListsDeleteModule {}

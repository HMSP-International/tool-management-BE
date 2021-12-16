import { forwardRef, Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ListModel, ListSchema } from '../../classes/list.model';

import { ListsDeleteService } from './lists.delete.service';

import { TasksModule } from '../../../tasks/tasks.module';
import { ListsPutModule } from '../put/lists.put.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]),
			forwardRef(() => TasksModule),
			ListsPutModule,
		],
	providers: [ ListsDeleteService ],
	exports: [ ListsDeleteService ],
})
export class ListsDeleteModule {}

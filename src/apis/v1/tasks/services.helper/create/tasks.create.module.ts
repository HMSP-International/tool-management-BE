import { forwardRef, Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { TaskModel, TaskSchema } from '../../classes/task.model';

import { TasksCreateService } from './tasks.create.service';

import { ListsModule } from '../../../lists/lists.module';

@Module({
	imports:
		[ MongooseModule.forFeature([ { name: TaskModel.name, schema: TaskSchema } ]), forwardRef(() => ListsModule) ],
	providers: [ TasksCreateService ],
	exports: [ TasksCreateService ],
})
export class TasksCreateModule {}

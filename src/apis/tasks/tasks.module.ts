import { forwardRef, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModel, TaskSchema } from './task.model';
import { ListsModule } from '../lists/lists.module';

@Module({
	imports:
		[ MongooseModule.forFeature([ { name: TaskModel.name, schema: TaskSchema } ]), forwardRef(() => ListsModule) ],
	providers: [ TasksResolver, TasksService ],
	exports: [ TasksService ],
})
export class TasksModule {}

import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { TaskModel, TaskSchema } from '../../classes/task.model';

import { TasksDeleteService } from './tasks.delete.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: TaskModel.name, schema: TaskSchema } ]) ],
	providers: [ TasksDeleteService ],
	exports: [ TasksDeleteService ],
})
export class TasksDeleteModule {}

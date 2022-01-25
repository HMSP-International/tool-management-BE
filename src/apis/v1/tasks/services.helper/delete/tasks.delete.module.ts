import { Module, forwardRef } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from 'apis/v1/comments/comments.module';
import { TaskModel, TaskSchema } from '../../classes/task.model';

import { TasksDeleteService } from './tasks.delete.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: TaskModel.name, schema: TaskSchema } ]),
			forwardRef(() => CommentsModule),
		],
	providers: [ TasksDeleteService ],
	exports: [ TasksDeleteService ],
})
export class TasksDeleteModule {}

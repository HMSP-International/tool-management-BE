import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { TaskModel, TaskSchema } from '../../classes/task.model';

import { TasksFindService } from './tasks.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: TaskModel.name, schema: TaskSchema } ]) ],
	providers: [ TasksFindService ],
	exports: [ TasksFindService ],
})
export class TasksFindModule {}

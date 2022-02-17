import { Module, forwardRef } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { PaticipantsModule } from 'apis/v1/paticipants/paticipants.module';
import { TaskModel, TaskSchema } from '../../classes/task.model';

import { TasksFindService } from './tasks.find.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: TaskModel.name, schema: TaskSchema } ]),
			forwardRef(() => PaticipantsModule),
		],
	providers: [ TasksFindService ],
	exports: [ TasksFindService ],
})
export class TasksFindModule {}

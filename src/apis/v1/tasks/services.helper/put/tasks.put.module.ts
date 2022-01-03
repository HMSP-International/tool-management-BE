import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModel, TaskSchema } from '../../classes/task.model';
import { TasksPutService } from './tasks.put.service';
import { ListsModule } from 'apis/v1/lists/lists.module';
import { ProjectsModule } from 'apis/v1/projects/projects.module';
import { PaticipantsModule } from 'apis/v1/paticipants/paticipants.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: TaskModel.name, schema: TaskSchema } ]),
			forwardRef(() => ListsModule),
			forwardRef(() => ProjectsModule),
			forwardRef(() => PaticipantsModule),
		],
	providers: [ TasksPutService ],
	exports: [ TasksPutService ],
})
export class TasksPutModule {}

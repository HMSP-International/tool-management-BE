import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';

import { TasksCreateModule } from './services.helper/create/tasks.create.module';
import { TasksDeleteModule } from './services.helper/delete/tasks.delete.module';
import { TasksFindModule } from './services.helper/find/tasks.find.module';
import { TasksPutModule } from './services.helper/put/tasks.put.module';
import { TasksResolverFieldModule } from './services.helper/resolvedField/tasks.resolveField.module';

@Module({
	imports: [ TasksCreateModule, TasksDeleteModule, TasksFindModule, TasksPutModule, TasksResolverFieldModule ],
	providers: [ TasksResolver, TasksService ],
	exports: [ TasksService ],
})
export class TasksModule {}

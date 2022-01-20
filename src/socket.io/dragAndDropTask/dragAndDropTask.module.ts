import { Module } from '@nestjs/common';
import { TasksModule } from 'apis/v1/tasks/tasks.module';
import { DragAndDropTaskGateWay } from './dragAndDropTask.gateway';

@Module({
	imports: [ TasksModule ],
	providers: [ DragAndDropTaskGateWay ],
	exports: [ DragAndDropTaskGateWay ],
})
export class DragAndDropTaskModule {}

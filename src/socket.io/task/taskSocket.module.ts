import { Module } from '@nestjs/common';
import { CreateTaskModule } from './createTask/createTask.module';
import { DeleteTaskModule } from './deleteTask/deleteTask.module';
import { DragAndDropTaskModule } from './dragAndDropTask/dragAndDropTask.module';
import { PutTaskModule } from './putTask/putTask.module';

@Module({
	imports: [ CreateTaskModule, DeleteTaskModule, DragAndDropTaskModule, PutTaskModule ],
})
export class TaskSocketModule {}

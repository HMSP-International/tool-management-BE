import { Module } from '@nestjs/common';
import { ListSocketModule } from './list/listSocket.module';
import { ProjectSocketModule } from './project/projectSocket.module';
import { TaskSocketModule } from './task/taskSocket.module';

@Module({
	imports: [ ListSocketModule, ProjectSocketModule, TaskSocketModule ],
})
export class SocketIOModule {}

import { Module } from '@nestjs/common';
import { ProjectSocketModule } from './project/projectSocket.module';
import { TaskSocketModule } from './task/taskSocket.module';

@Module({
	imports: [ ProjectSocketModule, TaskSocketModule ],
})
export class SocketIOModule {}

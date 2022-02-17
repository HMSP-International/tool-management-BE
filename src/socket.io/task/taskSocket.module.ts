import { Module } from '@nestjs/common';
import { TaskSocketGateWay } from './taskSocket.gateway';

@Module({
	imports: [ TaskSocketGateWay ],
})
export class TaskSocketModule {}

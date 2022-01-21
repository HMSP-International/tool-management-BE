import { Module } from '@nestjs/common';
import { DeleteTaskGateWay } from './deleteTask.gateway';

@Module({
	providers: [ DeleteTaskGateWay ],
	exports: [ DeleteTaskGateWay ],
})
export class DeleteTaskModule {}

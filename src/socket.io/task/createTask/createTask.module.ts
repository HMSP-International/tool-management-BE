import { Module } from '@nestjs/common';
import { CreateTaskGateWay } from './createTask.gateway';

@Module({
	providers: [ CreateTaskGateWay ],
	exports: [ CreateTaskGateWay ],
})
export class CreateTaskModule {}

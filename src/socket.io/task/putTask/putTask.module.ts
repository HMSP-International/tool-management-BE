import { Module } from '@nestjs/common';
import { PutTaskGateWay } from './putTask.gateway';

@Module({
	providers: [ PutTaskGateWay ],
	exports: [ PutTaskGateWay ],
})
export class PutTaskModule {}

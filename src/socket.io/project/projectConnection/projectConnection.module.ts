import { Module } from '@nestjs/common';
import { ProjectConnectionGateWay } from './projectConnection.gateway';

@Module({
	providers: [ ProjectConnectionGateWay ],
	exports: [ ProjectConnectionGateWay ],
})
export class ProjectConnectionModule {}

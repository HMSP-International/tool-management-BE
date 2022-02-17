import { Module } from '@nestjs/common';
import { ProjectSocketGateWay } from './projectSocket.gateway';

@Module({
	imports: [ ProjectSocketGateWay ],
})
export class ProjectSocketModule {}

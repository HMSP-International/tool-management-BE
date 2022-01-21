import { Module } from '@nestjs/common';
import { ProjectConnectionModule } from './projectConnection/projectConnection.module';

@Module({
	imports: [ ProjectConnectionModule ],
})
export class ProjectSocketModule {}

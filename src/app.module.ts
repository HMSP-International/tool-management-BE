// 3rd dependencies
import { Module } from '@nestjs/common';

// Module
import { CoresModule } from './core/globals.module';
import { FeaturesModule } from './core/features.module';
import { TaskGateWay } from './gateways/task.gateway';

@Module({
	imports: [ FeaturesModule, CoresModule ],
	providers: [ TaskGateWay ],
})
export class AppModule {}

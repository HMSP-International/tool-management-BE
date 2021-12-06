// 3rd dependencies
import { Module } from '@nestjs/common';

// Module
import { CoresModule } from './core/globals.module';
import { FeaturesModule } from './core/features.module';

@Module({
	imports: [ FeaturesModule, CoresModule ],
})
export class AppModule {}

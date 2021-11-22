// 3rd dependencies
import { Module } from '@nestjs/common';

// Module
import { CoresModule } from './core/globals.module';
import { FeaturesModule } from './core/features.module';
import { TasksModule } from './components/tasks/tasks.module';

@Module({
	imports: [ FeaturesModule, CoresModule, TasksModule ],
})
export class AppModule {}

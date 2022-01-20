// 3rd dependencies
import { Module } from '@nestjs/common';

// Module
import { CoresModule } from './core/globals.module';
import { FeaturesModule } from './core/features.module';
import { DragAndDropTaskModule } from 'socket.io/dragAndDropTask/dragAndDropTask.module';

@Module({
	imports: [ FeaturesModule, CoresModule, DragAndDropTaskModule ],
})
export class AppModule {}

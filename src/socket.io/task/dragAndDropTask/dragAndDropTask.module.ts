import { Module } from '@nestjs/common';
import { DragAndDropTaskGateWay } from './dragAndDropTask.gateway';

@Module({
	providers: [ DragAndDropTaskGateWay ],
	exports: [ DragAndDropTaskGateWay ],
})
export class DragAndDropTaskModule {}

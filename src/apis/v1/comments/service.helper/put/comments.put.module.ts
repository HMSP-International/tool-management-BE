import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// helpers
// mongoose
import { CommentModel, CommentSchema } from '../../classes/comment.model';
// Module
import { TasksModule } from 'apis/v1/tasks/tasks.module';
// services
import { CommentsPutService } from './comments.put.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: CommentModel.name, schema: CommentSchema } ]) ],
	providers: [ CommentsPutService ],
	exports: [ CommentsPutService ],
})
export class CommentsPutModule {}

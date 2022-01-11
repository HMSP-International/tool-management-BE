import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// helpers
// mongoose
import { CommentModel, CommentSchema } from '../../classes/comment.model';
// Module
import { TasksModule } from 'apis/v1/tasks/tasks.module';
// services
import { CommentsDeleteService } from './comments.delete.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: CommentModel.name, schema: CommentSchema } ]),
			forwardRef(() => TasksModule),
		],
	providers: [ CommentsDeleteService ],
	exports: [ CommentsDeleteService ],
})
export class CommentsDeleteModule {}

import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// helpers
// mongoose
import { CommentModel, CommentSchema } from '../../classes/comment.model';
// Module
import { UsersModule } from 'apis/v1/users/users.module';
import { TasksModule } from 'apis/v1/tasks/tasks.module';
// services
import { CommentsCreateService } from './comments.create.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: CommentModel.name, schema: CommentSchema } ]),
			forwardRef(() => UsersModule),
			forwardRef(() => TasksModule),
		],
	providers: [ CommentsCreateService ],
	exports: [ CommentsCreateService ],
})
export class CommentsCreateModule {}

import { CommentsCreateModule } from './service.helper/create/comments.create.module';
import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { CommentsDeleteModule } from './service.helper/delete/comments.delete.module';
import { CollaboratorsResolverFieldModule } from './service.helper/resolveField/comments.resolveField.module';
import { CommentsFindModule } from './service.helper/find/comments.find.module';
import { CommentsPutModule } from './service.helper/put/comments.put.module';

@Module({
	imports:
		[
			CommentsCreateModule,
			CommentsDeleteModule,
			CommentsFindModule,
			CommentsPutModule,
			CollaboratorsResolverFieldModule,
		],
	providers: [ CommentsResolver, CommentsService ],
	exports: [ CommentsService ],
})
export class CommentsModule {}

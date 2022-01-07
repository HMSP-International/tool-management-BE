import { CommentsCreateModule } from './service.helper/create/comments.create.module';
import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { CollaboratorsResolverFieldModule } from './service.helper/resolveField/comments.resolveField.module';
import { CommentsFindModule } from './service.helper/find/comments.find.module';

@Module({
	imports: [ CommentsCreateModule, CommentsFindModule, CollaboratorsResolverFieldModule ],
	providers: [ CommentsResolver, CommentsService ],
	exports: [ CommentsService ],
})
export class CommentsModule {}

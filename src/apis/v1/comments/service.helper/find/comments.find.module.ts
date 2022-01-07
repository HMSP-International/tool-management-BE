import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// helpers
// mongoose
import { CommentModel, CommentSchema } from '../../classes/comment.model';
// Module
// services
import { CommentsFindService } from './comments.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: CommentModel.name, schema: CommentSchema } ]) ],
	providers: [ CommentsFindService ],
	exports: [ CommentsFindService ],
})
export class CommentsFindModule {}

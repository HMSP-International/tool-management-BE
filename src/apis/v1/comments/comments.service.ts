import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as commentDTO from './classes/comments.dto';
import { CommentsCreateService } from './service.helper/create/comments.create.service';
import { CommentsFindService } from './service.helper/find/comments.find.service';
import { CommentsResolverFieldService } from './service.helper/resolveField/comments.resolveField.service';

@Injectable()
export class CommentsService {
	constructor (
		private readonly commentsCreateService: CommentsCreateService,
		private readonly commentsFindService: CommentsFindService,
		private readonly commentsResolverFieldService: CommentsResolverFieldService,
	) {}

	create (createCommentInput: commentDTO.CreateCommentInput, user: IPayLoadToken) {
		return this.commentsCreateService.create(createCommentInput, user);
	}

	getModel () {
		return this.commentsFindService.getModel();
	}

	getUser (_id: string) {
		return this.commentsResolverFieldService.getUser(_id);
	}

	getTask (_id: string) {
		return this.commentsResolverFieldService.getTask(_id);
	}
}

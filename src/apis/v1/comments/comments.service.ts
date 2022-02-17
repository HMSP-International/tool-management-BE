import { Injectable } from '@nestjs/common';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as commentDTO from './classes/comments.dto';
import { CommentsCreateService } from './service.helper/create/comments.create.service';
import { CommentsDeleteService } from './service.helper/delete/comments.delete.service';
import { CommentsFindService } from './service.helper/find/comments.find.service';
import { CommentsPutService } from './service.helper/put/comments.put.service';
import { CommentsResolverFieldService } from './service.helper/resolveField/comments.resolveField.service';

@Injectable()
export class CommentsService {
	constructor (
		private readonly commentsCreateService: CommentsCreateService,
		private readonly commentsDeleteService: CommentsDeleteService,
		private readonly commentsFindService: CommentsFindService,
		private readonly commentsPutService: CommentsPutService,
		private readonly commentsResolverFieldService: CommentsResolverFieldService,
	) {}

	create (createCommentInput: commentDTO.CreateCommentInput, user: IPayLoadToken) {
		return this.commentsCreateService.create(createCommentInput, user);
	}

	deleteById (comment: commentDTO.DeleteCommentInput, user: IPayLoadToken) {
		return this.commentsDeleteService.deleteById(comment, user);
	}

	deleteByTaskId (_taskId: string) {
		return this.commentsDeleteService.deleteByTaskId(_taskId);
	}

	changeContentByCommentId (comment: commentDTO.PutChangeCommentInput, user: IPayLoadToken) {
		return this.commentsPutService.changeContentByCommentId(comment, user);
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

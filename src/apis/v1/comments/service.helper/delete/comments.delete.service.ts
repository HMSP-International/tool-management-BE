import { HttpException, forwardRef, HttpStatus, Injectable, Inject } from '@nestjs/common';
// mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// helpers
// classes
import * as commentDTO from '../../classes/comments.dto';
import { CommentDocument, CommentModel } from '../../classes/comment.model';
// services
import { TasksService } from 'apis/v1/tasks/tasks.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Injectable()
export class CommentsDeleteService {
	constructor (
		@InjectModel(CommentModel.name) private commentEntity: Model<CommentDocument>,
		@Inject(forwardRef(() => TasksService))
		private readonly tasksService: TasksService,
	) {}

	async deleteById ({ _commentId }: commentDTO.DeleteCommentInput, user: IPayLoadToken): Promise<CommentDocument> {
		const comment = await this.commentEntity.findById(_commentId);

		if (comment === null) {
			throw new HttpException(`Not Found comment`, HttpStatus.NOT_FOUND);
		}
		if (comment._userId.toString() !== user._id) {
			throw new HttpException(`Can't delete comment`, HttpStatus.FORBIDDEN);
		}

		this.tasksService.removeComment(comment._taskId, _commentId);

		return await this.commentEntity.findByIdAndDelete(_commentId);
	}
}

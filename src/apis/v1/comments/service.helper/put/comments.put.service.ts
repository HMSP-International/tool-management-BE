import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// helpers
// classes
import * as commentDTO from '../../classes/comments.dto';
import { CommentDocument, CommentModel } from '../../classes/comment.model';
// services
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Injectable()
export class CommentsPutService {
	constructor (@InjectModel(CommentModel.name) private commentEntity: Model<CommentDocument>) {}

	async changeContentByCommentId (
		{ _commentId, content }: commentDTO.PutChangeCommentInput,
		user: IPayLoadToken,
	): Promise<CommentDocument> {
		const comment = await this.commentEntity.findById(_commentId);

		if (comment === null) {
			throw new HttpException(`Not Found comment`, HttpStatus.NOT_FOUND);
		}
		if (comment._userId.toString() !== user._id) {
			throw new HttpException(`Can't change comment`, HttpStatus.FORBIDDEN);
		}

		comment.content = content;

		return await comment.save();
	}
}

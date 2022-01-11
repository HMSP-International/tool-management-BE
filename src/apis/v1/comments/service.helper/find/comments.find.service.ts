import { Injectable } from '@nestjs/common';
// mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// helpers
// classes
import { CommentDocument, CommentModel } from '../../classes/comment.model';
// services

@Injectable()
export class CommentsFindService {
	constructor (@InjectModel(CommentModel.name) private commentEntity: Model<CommentDocument>) {}

	getModel (): Model<CommentDocument> {
		return this.commentEntity;
	}
}

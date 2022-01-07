import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// helpers
// classes
import * as commentDTO from '../../classes/comments.dto';
import { CommentDocument, CommentModel } from '../../classes/comment.model';
// services
import { TasksService } from 'apis/v1/tasks/tasks.service';
import { UsersService } from 'apis/v1/users/users.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Injectable()
export class CommentsFindService {
	constructor (@InjectModel(CommentModel.name) private commentEntity: Model<CommentDocument>) {}

	getModel (): Model<CommentDocument> {
		return this.commentEntity;
	}
}

import { HttpException, HttpStatus, Injectable, forwardRef, Inject } from '@nestjs/common';
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
export class CommentsCreateService {
	constructor (
		@InjectModel(CommentModel.name) private commentEntity: Model<CommentDocument>,
		@Inject(forwardRef(() => UsersService))
		private readonly usersService: UsersService,
		@Inject(forwardRef(() => TasksService))
		private readonly tasksService: TasksService,
	) {}

	async create ({ _taskId, content }: commentDTO.CreateCommentInput, user: IPayLoadToken): Promise<CommentDocument> {
		// check objectID
		if (this.usersService.findById(user._id) === null) {
			throw new HttpException('Not Found userID', HttpStatus.NOT_FOUND);
		}

		const task = await this.tasksService.findById({ _taskId });

		const comment = await new this.commentEntity({ _taskId, _userId: user._id, content }).save();
		task.comments.push(comment._id);
		task.save();

		return comment;
	}
}

import { Resolver, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './classes/comment.entity';
import * as commentDTO from './classes/comments.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CurrentUser } from 'common/decorator/CurrentUser.decorator';
import { Task } from '../tasks/classes/task.entity';
import { User } from '../users/classes/user.entity';

@Resolver(() => Comment)
export class CommentsResolver {
	constructor (private readonly commentsService: CommentsService) {}

	@Mutation(() => Comment)
	createComment (
		@Args('createCommentInput') createCommentInput: commentDTO.CreateCommentInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.commentsService.create(createCommentInput, user);
	}

	@Mutation(() => Comment)
	deleteCommentById (
		@Args('deleteCommentInput') deleteCommentInput: commentDTO.DeleteCommentInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.commentsService.deleteTaskById(deleteCommentInput, user);
	}

	@Mutation(() => Comment)
	changeContentByCommentId (
		@Args('putChangeCommentInput') putChangeCommentInput: commentDTO.PutChangeCommentInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.commentsService.changeContentByCommentId(putChangeCommentInput, user);
	}

	@ResolveField(() => User)
	_userId (@Parent() comment: Comment) {
		return this.commentsService.getUser(comment._userId);
	}

	@ResolveField(() => Task)
	_taskId (@Parent() comment: Comment) {
		return this.commentsService.getTask(comment._taskId);
	}
}

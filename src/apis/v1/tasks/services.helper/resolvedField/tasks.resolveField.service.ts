import { forwardRef, Inject, Injectable } from '@nestjs/common';
// services
import { UsersService } from 'apis/v1/users/users.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { CommentsService } from 'apis/v1/comments/comments.service';
// classes

@Injectable()
export class TasksResolverFieldService {
	constructor (
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		@Inject(forwardRef(() => UsersService))
		private readonly usersService: UsersService,
		@Inject(forwardRef(() => CommentsService))
		private readonly commentsService: CommentsService,
	) {}

	getProject (_id: string) {
		return this.projectsService.findById(_id);
	}

	getUser (_id: string) {
		return this.usersService.findById(_id);
	}

	async getComments (ids: string[]) {
		return await this.commentsService.getModel().find({ _id: { $in: ids } });
	}
}

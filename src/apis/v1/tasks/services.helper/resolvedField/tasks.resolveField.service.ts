import { forwardRef, Inject, Injectable } from '@nestjs/common';
// services
import { UsersService } from 'apis/v1/users/users.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
// classes

@Injectable()
export class TasksResolverFieldService {
	constructor (
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		@Inject(forwardRef(() => UsersService))
		private readonly usersService: UsersService,
	) {}

	getProject (_id: string) {
		return this.projectsService.findById(_id);
	}

	getUser (_id: string) {
		return this.usersService.findById(_id);
	}
}

import { forwardRef, Inject, Injectable } from '@nestjs/common';
// services
import { UsersService } from '../../../users/users.service';
import { CollaboratorsService } from '../../../collaborators/collaborators.service';
import { ProjectsService } from '../../../projects/projects.service';
// classes

@Injectable()
export class PaticipantsResolverFieldService {
	constructor (
		@Inject(forwardRef(() => CollaboratorsService))
		private readonly collaboratorsService: CollaboratorsService,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
		@Inject(forwardRef(() => UsersService))
		private readonly usersService: UsersService,
	) {}

	getCollaborator (_id: string) {
		return this.collaboratorsService.findById(_id);
	}

	getProject (_id: string) {
		return this.projectsService.findById(_id);
	}

	getUser (_id: string) {
		return this.usersService.findById(_id);
	}
}

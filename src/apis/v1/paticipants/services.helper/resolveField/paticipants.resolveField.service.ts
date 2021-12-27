import { forwardRef, Inject, Injectable } from '@nestjs/common';
// services
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
	) {}

	getCollaborator (_id: string) {
		return this.collaboratorsService.findById(_id);
	}

	getProject (_id: string) {
		return this.projectsService.findById(_id);
	}
}

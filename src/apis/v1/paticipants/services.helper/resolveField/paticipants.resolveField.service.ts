import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// services
import { CollaboratorsService } from '../../../collaborators/collaborators.service';
import { ProjectsService } from '../../../projects/projects.service';
// classes

@Injectable()
export class PaticipantsResolverFieldService {
	constructor (
		private readonly collaboratorsService: CollaboratorsService,
		private readonly projectsService: ProjectsService,
	) {}

	getCollaborator (_id: string) {
		return this.collaboratorsService.findById(_id);
	}

	getProject (_id: string) {
		return this.projectsService.findById(_id);
	}
}

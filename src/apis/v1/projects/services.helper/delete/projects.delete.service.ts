import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../../classes/project.entity';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';
import { ListsService } from '../../../lists/lists.service';
import { PaticipantsService } from '../../../paticipants/paticipants.service';

@Injectable()
export class ProjectsDeleteService {
	constructor (
		@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
		@Inject(forwardRef(() => PaticipantsService))
		private readonly paticipantsService: PaticipantsService,
	) {}

	async deleteProjectById (_projectId: string): Promise<Project> {
		const projectDeleted = await this.projectEntity.findByIdAndDelete(_projectId);
		if (projectDeleted === null) {
			throw new HttpException('Not Found _projectId', HttpStatus.NOT_FOUND);
		}

		this.listsService.deleteByProjectId(_projectId);
		this.paticipantsService.findByProjectAndDelete(_projectId);

		return projectDeleted;
	}
}

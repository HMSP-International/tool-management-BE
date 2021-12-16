import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../../classes/project.entity';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';
import { ListsService } from '../../../lists/lists.service';

@Injectable()
export class ProjectsDeleteService {
	constructor (
		@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
	) {}

	async deleteProjectById (_projectId: string): Promise<Project> {
		const projectDeleted = await this.projectEntity.findByIdAndDelete(_projectId);
		if (projectDeleted === null) {
			throw new HttpException('Not Found _projectId', HttpStatus.NOT_FOUND);
		}

		this.listsService.deleteByProjectId(_projectId);

		return projectDeleted;
	}
}

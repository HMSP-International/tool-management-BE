import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../../classes/project.entity';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';
import { ListsService } from '../../../lists/lists.service';
import { PaticipantsService } from '../../../paticipants/paticipants.service';
import { IPayLoadToken } from '../../../../../helpers/modules/token/token.interface';

@Injectable()
export class ProjectsDeleteService {
	constructor (
		@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>,
		@Inject(forwardRef(() => ListsService))
		private readonly listsService: ListsService,
		@Inject(forwardRef(() => PaticipantsService))
		private readonly paticipantsService: PaticipantsService,
	) {}

	async deleteProjectById (_projectId: string, user: IPayLoadToken): Promise<Project> {
		const project = await this.projectEntity.findById(_projectId);

		if (project === null) {
			throw new HttpException('Not Found _projectId', HttpStatus.NOT_FOUND);
		}
		if (project.owner.toString() !== user._id) {
			throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
		}

		await this.listsService.deleteByProjectId(_projectId, user);
		await this.paticipantsService.deleteByProjectId(_projectId);

		const projectDeleted = await this.projectEntity.findByIdAndDelete(_projectId);

		return projectDeleted;
	}
}

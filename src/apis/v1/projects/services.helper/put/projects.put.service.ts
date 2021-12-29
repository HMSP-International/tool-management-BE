import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';

@Injectable()
export class ProjectsPutService {
	constructor (@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>) {}

	async changeNameProject ({ _projectId, name }: ProjectDTO.ChangeNameProjectInput): Promise<ProjectDocument> {
		const project = await this.projectEntity.findByIdAndUpdate(_projectId, { name }, { new: true });

		if (project === null) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

		return project;
	}
}

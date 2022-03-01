import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';
import { IPayLoadToken } from '../../../../../helpers/modules/token/token.interface';

@Injectable()
export class ProjectsPutService {
	constructor (@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>) {}

	async changeNameProject (
		{ _projectId, name }: ProjectDTO.ChangeNameProjectInput,
		user: IPayLoadToken,
	): Promise<ProjectDocument> {
		const project = await this.projectEntity.findById(_projectId);
		if (project === null) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		if (project.owner.toString() !== user._id) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

		const projectEdited = await this.projectEntity.findByIdAndUpdate(_projectId, { name }, { new: true });

		return projectEdited;
	}
}

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

	async addNewViewer (
		{ _projectId, email }: ProjectDTO.AddNewViewerInput,
		user: IPayLoadToken,
	): Promise<ProjectDocument> {
		const project = await this.projectEntity.findById(_projectId);
		if (project === null) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		if (project.owner.toString() !== user._id) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

		const viewers = project.viewers;
		const index = viewers.findIndex(viewer => viewer === email);

		if (index >= 0) throw new HttpException('Duplicate email', HttpStatus.BAD_REQUEST);

		const projectEdited = await this.projectEntity.findByIdAndUpdate(
			_projectId,
			{ viewers: [ ...viewers, email ] },
			{ new: true },
		);

		return projectEdited;
	}

	async removeViewer (
		{ _projectId, email }: ProjectDTO.RemoveViewerInput,
		user: IPayLoadToken,
	): Promise<ProjectDocument> {
		const project = await this.projectEntity.findById(_projectId);
		if (project === null) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		if (project.owner.toString() !== user._id) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

		const viewers = project.viewers;
		const newViewers = viewers.filter(viewer => viewer !== email);

		const projectEdited = await this.projectEntity.findByIdAndUpdate(
			_projectId,
			{ viewers: newViewers },
			{ new: true },
		);

		return projectEdited;
	}
}

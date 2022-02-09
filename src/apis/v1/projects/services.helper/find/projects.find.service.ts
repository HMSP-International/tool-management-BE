import { HttpException, HttpStatus, Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as ProjectDTO from '../../classes/projects.dto';
import { Project } from '../../classes/project.entity';
import { ProjectModel, ProjectDocument } from '../../classes/project.model';
import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';

@Injectable()
export class ProjectsFindService {
	constructor (
		@InjectModel(ProjectModel.name) private projectEntity: Model<ProjectDocument>,
		@Inject(forwardRef(() => PaticipantsService))
		private readonly paticipantsService: PaticipantsService,
	) {}

	async findAll (_spacesId: string[], _userId: string): Promise<ProjectDocument[]> {
		const projects = await this.projectEntity.find({ _spaceId: _spacesId, owner: _userId }).sort('_spaceId order');

		return projects;
	}

	async findById (_id: string): Promise<ProjectDocument> {
		const project = await this.projectEntity.findById(_id);

		if (project === null) {
			throw new HttpException('Not Found _projectId', HttpStatus.BAD_REQUEST);
		}

		return project;
	}

	async findByListId (_ids: string[]): Promise<ProjectDocument[]> {
		const projects = await this.projectEntity.find({ _id: _ids });

		return projects;
	}

	async findAllByCollaborator (getProjectsInput: ProjectDTO.GetProjectsInput): Promise<ProjectDocument[]> {
		const projects = await this.projectEntity.find({ _spaceId: getProjectsInput._spacesId }).sort('_spaceId order');
		return projects;
	}

	async findByMemberId (getProjectsInput: ProjectDTO.GetProjectsInput): Promise<ProjectDocument[]> {
		const projects = await this.projectEntity.find({ _spaceId: getProjectsInput._spacesId }).sort('_spaceId order');
		return projects;
	}

	async findByMemberIdAndSpaceId ({
		_memberId,
		_spaceId,
	}: ProjectDTO.FindByMemberIdAndSpaceIdInput): Promise<ProjectDocument[]> {
		const paticipants = await this.paticipantsService.getProjectsByMemberId(_memberId);
		const projects = [];

		if (_spaceId.length === 24) {
			for (let i = 0; i < paticipants.length; i++) {
				const project = await this.projectEntity.findOne({
					_id: paticipants[i]._projectId.toString(),
					_spaceId,
				});
				if (project !== null) {
					projects.push(project);
				}
			}
		}
		else {
			for (let i = 0; i < paticipants.length; i++) {
				const project = await this.projectEntity.findOne({
					_id: paticipants[i]._projectId.toString(),
				});
				if (project !== null) {
					projects.push(project);
				}
			}
		}

		return projects;
	}
}

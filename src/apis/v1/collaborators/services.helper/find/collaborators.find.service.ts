import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// classes
import { IPayLoadToken } from '../../../../../helpers/modules/token/token.interface';
import { Collaborator } from '../../classes/collaborator.entity';
// mongoose
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CollaboratorDocument, CollaboratorModel } from '../../classes/collaborator.model';

@Injectable()
export class CollaboratorsFindService {
	constructor (@InjectModel(CollaboratorModel.name) private collaboratorEntity: Model<CollaboratorDocument>) {}

	findOneByInvitedSpace = async (
		_adminId: string,
		_memberId: string,
		_workSpaceId: string,
	): Promise<Collaborator | null> => {
		return await this.collaboratorEntity.findOne({ _adminId, _memberId, _workSpaceId });
	};

	findById = async (_id: string): Promise<Collaborator | null> => {
		const collaborator = await this.collaboratorEntity.findById(_id);
		if (collaborator === null) {
			throw new HttpException('Not Found _projectId', HttpStatus.BAD_REQUEST);
		}

		return collaborator;
	};

	async findUsersBySpaceId (_spaceId: string): Promise<Collaborator[]> {
		return await this.collaboratorEntity.find({ _workSpaceId: _spaceId });
	}

	async findInvitedSpaces (user: IPayLoadToken): Promise<Collaborator[]> {
		const collaborators = await this.collaboratorEntity.find({ _memberId: user._id });
		return collaborators;
	}
}

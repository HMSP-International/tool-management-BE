import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
// mongoose
import { InjectModel } from '@nestjs/mongoose';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Model } from 'mongoose';
import { CollaboratorDocument, CollaboratorModel } from '../../classes/collaborator.model';
import * as CollaboratorDTO from '../../classes/collaborators.dto';

@Injectable()
export class CollaboratorsDeleteService {
	constructor (@InjectModel(CollaboratorModel.name) private collaboratorEntity: Model<CollaboratorDocument>) {}

	async deleteBySpaceId (_workSpaceId: string): Promise<void> {
		await this.collaboratorEntity.deleteMany({ _workSpaceId });
	}

	async deleteByMemberAndSpace (
		{ _memberId, _workSpaceId }: CollaboratorDTO.DeleteByUserAndSpaceInput,
		user: IPayLoadToken,
	): Promise<CollaboratorDocument> {
		const collaborator = await this.collaboratorEntity.findOne({ _adminId: user._id, _memberId, _workSpaceId });

		if (collaborator === null) {
			throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		}

		return await this.collaboratorEntity.findByIdAndDelete(collaborator._id);
	}

	deleteByMemberId = async (_memberId: string): Promise<void> => {
		const collaborators = await this.collaboratorEntity.deleteMany({ _memberId });
		console.log('delete collaborator when delete user', collaborators);
	};
}

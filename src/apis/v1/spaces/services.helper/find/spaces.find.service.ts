import { HttpException, HttpStatus, Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { SpaceModel, SpaceDocument } from '../../classes/space.model';
import * as SpaceDTO from '../../classes/spaces.dto';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';

@Injectable()
export class SpacesFindService {
	constructor (
		@InjectModel(SpaceModel.name) private spaceEntity: Model<SpaceDocument>,
		@Inject(forwardRef(() => CollaboratorsService))
		private readonly collaboratorsService: CollaboratorsService,
	) {}

	async findAll (user: IPayLoadToken): Promise<SpaceDocument[]> {
		const spaces = await this.spaceEntity.find({ owner: user._id }).sort('order');

		return spaces;
	}

	async findBySpaceAndOwner (_id: string, owner: string): Promise<SpaceDocument | null> {
		const space = await this.spaceEntity.findOne({ _id, owner });

		return space;
	}

	async findById (_id: string): Promise<SpaceDocument> {
		const space = await this.spaceEntity.findById(_id);

		if (space === null) throw new HttpException('Not Found _spaceId = ' + _id, HttpStatus.NOT_FOUND);

		return space;
	}

	async findByMemberId ({ _memberId }: SpaceDTO.FindByMemberId, { _id }: IPayLoadToken): Promise<SpaceDocument[]> {
		const collaborators = await this.collaboratorsService.findByMemberId(_memberId);
		const spaces = [];

		for (let i = 0; i < collaborators.length; i++) {
			const space = await this.spaceEntity.findById(collaborators[i]._workSpaceId.toString());

			spaces.push(space);
		}

		return spaces;
	}
}

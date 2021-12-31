import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Space } from '../../classes/space.entity';
import { SpaceModel, SpaceDocument } from '../../classes/space.model';

@Injectable()
export class SpacesFindService {
	constructor (@InjectModel(SpaceModel.name) private spaceEntity: Model<SpaceDocument>) {}

	async findAll (user: IPayLoadToken): Promise<Space[]> {
		const spaces = await this.spaceEntity.find({ owner: user._id }).sort('order');

		return spaces;
	}

	async findBySpaceAndOwner (_id: string, owner: string): Promise<Space | null> {
		const space = await this.spaceEntity.findOne({ _id, owner });

		return space;
	}

	async findById (_id: string): Promise<Space> {
		const space = await this.spaceEntity.findById(_id);

		if (space === null) throw new HttpException('Not Found _spaceId = ' + _id, HttpStatus.NOT_FOUND);

		return space;
	}
}

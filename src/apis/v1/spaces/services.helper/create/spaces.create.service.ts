import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Space } from '../../classes/space.entity';
import { SpaceModel, SpaceDocument } from '../../classes/space.model';
import { SpacesFindService } from '../find/spaces.find.service';

@Injectable()
export class SpacesCreateService {
	constructor (
		@InjectModel(SpaceModel.name) private spaceEntity: Model<SpaceDocument>,
		private readonly spacesFindService: SpacesFindService,
	) {}

	async create (name: string, user: IPayLoadToken): Promise<Space[]> {
		const order = await this.spaceEntity.count({ owner: user._id });

		const space = new this.spaceEntity({ name, owner: user._id, order });
		await space.save();

		return this.spacesFindService.findAll(user);
	}
}

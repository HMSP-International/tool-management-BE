import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPayLoadToken } from '../token/token.interface';
import { Space, SpaceDocument } from './space.entity';

@Injectable()
export class SpacesService {
	constructor (@InjectModel(Space.name) private spaceEntity: Model<SpaceDocument>) {}

	async findAll (user: IPayLoadToken): Promise<Space[]> {
		const spaces = await this.spaceEntity.find({ owner: user._id }).sort('order');

		return spaces;
	}

	async create (name: string, user: IPayLoadToken): Promise<Space[]> {
		const order = await this.spaceEntity.count({ owner: user._id });

		const space = new this.spaceEntity({ name, owner: user._id, order });
		await space.save();

		return this.findAll(user);
	}
}

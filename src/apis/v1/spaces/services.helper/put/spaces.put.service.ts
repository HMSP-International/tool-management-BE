import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Space } from '../../classes/space.entity';
import { SpaceModel, SpaceDocument } from '../../classes/space.model';
import * as SpaceDTO from '../../classes/spaces.dto';

@Injectable()
export class SpacesPutService {
	constructor (@InjectModel(SpaceModel.name) private spaceEntity: Model<SpaceDocument>) {}

	async changeName (changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput): Promise<Space> {
		const { _id, ...rest } = changeNameSpaceInput;

		const space = await this.spaceEntity.findByIdAndUpdate(_id, rest, { new: true });

		if (space === null) throw new HttpException('Not Found _spaceId = ' + _id, HttpStatus.NOT_FOUND);

		return space;
	}
}

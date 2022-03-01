import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Model } from 'mongoose';
import { Space } from '../../classes/space.entity';
import { SpaceModel, SpaceDocument } from '../../classes/space.model';
import * as SpaceDTO from '../../classes/spaces.dto';

@Injectable()
export class SpacesPutService {
	constructor (@InjectModel(SpaceModel.name) private spaceEntity: Model<SpaceDocument>) {}

	async changeName (changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput): Promise<SpaceDocument> {
		const { _id, ...rest } = changeNameSpaceInput;

		const space = await this.spaceEntity.findByIdAndUpdate(_id, rest, { new: true });

		if (space === null) throw new HttpException('Not Found _spaceId = ' + _id, HttpStatus.NOT_FOUND);

		return space;
	}

	async addNewViewer (
		{ _spaceId, email }: SpaceDTO.AddNewViewerInput,
		user: IPayLoadToken,
	): Promise<SpaceDocument> {
		const space = await this.spaceEntity.findById(_spaceId);
		if (space === null) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		if (space.owner.toString() !== user._id) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

		const viewers = space.viewers;
		const index = viewers.findIndex(viewer => viewer === email);

		if (index >= 0) throw new HttpException('Duplicate email', HttpStatus.BAD_REQUEST);

		const spaceEdited = await this.spaceEntity.findByIdAndUpdate(
			_spaceId,
			{ viewers: [ ...viewers, email ] },
			{ new: true },
		);

		return spaceEdited;
	}

	async removeViewer (
		{ _spaceId, email }: SpaceDTO.RemoveViewerInput,
		user: IPayLoadToken,
	): Promise<SpaceDocument> {
		const space = await this.spaceEntity.findById(_spaceId);
		if (space === null) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		if (space.owner.toString() !== user._id) throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

		const viewers = space.viewers;
		const newViewers = viewers.filter(viewer => viewer !== email);

		const spaceEdited = await this.spaceEntity.findByIdAndUpdate(
			_spaceId,
			{ viewers: newViewers },
			{ new: true },
		);

		return spaceEdited;
	}
}

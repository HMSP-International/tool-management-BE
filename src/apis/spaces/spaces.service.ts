import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPayLoadToken } from '../../helpers/modules/token/token.interface';
import { ProjectsService } from '../projects/projects.service';
import { Space } from './space.entity';
import { SpaceModel, SpaceDocument } from './space.model';
import * as SpaceDTO from './spaces.dto';

@Injectable()
export class SpacesService {
	constructor (
		@InjectModel(SpaceModel.name) private spaceEntity: Model<SpaceDocument>,
		@Inject(forwardRef(() => ProjectsService))
		private readonly projectsService: ProjectsService,
	) {}

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

	async create (name: string, user: IPayLoadToken): Promise<Space[]> {
		const order = await this.spaceEntity.count({ owner: user._id });

		const space = new this.spaceEntity({ name, owner: user._id, order });
		await space.save();

		return this.findAll(user);
	}

	async changeName (changeNameSpaceInput: SpaceDTO.ChangeNameSpaceInput, user: IPayLoadToken): Promise<Space> {
		const { _id, ...rest } = changeNameSpaceInput;

		const space = await this.spaceEntity.findByIdAndUpdate(_id, rest, { new: true });

		if (space === null) throw new HttpException('Not Found _spaceId = ' + _id, HttpStatus.NOT_FOUND);

		return space;
	}

	async deleteSpaceById (_spaceId: string, _userId: string): Promise<Space> {
		const space = await this.findById(_spaceId);
		if (space.owner.toString() !== _userId) {
			throw new HttpException('This space is not your', HttpStatus.BAD_REQUEST);
		}

		const projects = await this.projectsService.findAll([ _spaceId ], _userId);
		if (projects.length >= 1) {
			throw new HttpException('Please delete all project first', HttpStatus.BAD_REQUEST);
		}

		return await this.spaceEntity.findByIdAndDelete(_spaceId);
	}
}

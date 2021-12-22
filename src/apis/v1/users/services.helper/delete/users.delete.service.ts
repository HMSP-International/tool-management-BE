import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../classes/user.entity';
import { UserModel, UserDocument } from '../../classes/user.model';

@Injectable()
export class UsersDeleteService {
	constructor (@InjectModel(UserModel.name) private userEntity: Model<UserDocument>) {}

	async deleteById (_id: string): Promise<UserModel> {
		const user = await this.userEntity.findByIdAndDelete(_id);

		if (user === null)
			throw new NotFoundException('This user not found or maybe deleted, please refresh your page');

		return user;
	}
}

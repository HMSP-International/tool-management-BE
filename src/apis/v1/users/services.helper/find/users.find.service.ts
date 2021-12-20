import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../classes/user.entity';
import { UserModel, UserDocument } from '../../classes/user.model';

@Injectable()
export class UsersFindService {
	constructor (@InjectModel(UserModel.name) private userEntity: Model<UserDocument>) {}

	async findAll (): Promise<UserModel[]> {
		const users = await this.userEntity.find().select('-password');
		if (users.length <= 0) throw new HttpException('Not Found Any User', HttpStatus.NO_CONTENT);
		return users;
	}

	async findById (_id: string, getPassword: Boolean = false): Promise<UserModel | null> {
		if (getPassword === true) {
			return await this.userEntity.findById(_id);
		}
		else {
			return await this.userEntity.findById(_id).select('-password');
		}
	}

	async findByEmail (email: string): Promise<UserModel | null> {
		const user = await this.userEntity.findOne({ email }).populate('_roleId');

		return user;
	}
}

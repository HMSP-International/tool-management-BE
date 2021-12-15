import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './classes/users.dto';
import { User } from './classes/user.entity';
import { UserModel, UserDocument } from './classes/user.model';
import * as UserDto from './classes/users.dto';
import { UsersPutService } from './services.helper/put/users.put.service';
import { UsersFindService } from './services.helper/find/users.find.service';

@Injectable()
export class UsersService {
	constructor (
		@InjectModel(UserModel.name) private userEntity: Model<UserDocument>,
		private readonly usersPutService: UsersPutService,
		private readonly usersFindService: UsersFindService,
	) {}

	async createUser (createUserInput: CreateUserInput): Promise<User> {
		{
			const user = await this.findByEmail(createUserInput.email);
			if (user) throw new HttpException('Email Already Exists', HttpStatus.CONFLICT);
		}

		{
			const user = await new this.userEntity(createUserInput);
			const newUser = await user.save();
			newUser.password = null;
			return newUser;
		}
	}

	async findAll (): Promise<User[]> {
		return await this.usersFindService.findAll();
	}

	async findById (_id: string, getPassword: Boolean = false): Promise<User | null> {
		return await this.usersFindService.findById(_id, getPassword);
	}

	async findByEmail (email: string): Promise<User | null> {
		return await this.usersFindService.findByEmail(email);
	}

	async deleteById (_id: string): Promise<User[]> {
		const user = await this.userEntity.findByIdAndDelete(_id);

		if (user === null)
			throw new NotFoundException('This user not found or maybe deleted, please refresh your page');

		return await this.userEntity.find({});
	}

	async changePassword (_id: string, changePasswordInput: UserDto.ChangePasswordInput): Promise<User> {
		return await this.usersPutService.changePassword(_id, changePasswordInput);
	}

	async changePasswordByAdmin (changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin): Promise<User> {
		return await this.usersPutService.changePasswordByAdmin(changePasswordInputByAdmin);
	}

	async changeInformation (_id: string, changeInformationInput: UserDto.ChangeInformationInput): Promise<User> {
		return await this.usersPutService.changeInformation(_id, changeInformationInput);
	}

	async changeInformationByAdmin (
		_id: string,
		changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin,
	): Promise<User> {
		return await this.usersPutService.changeInformationByAdmin(_id, changeInformationInputByAdmin);
	}
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../classes/user.entity';
import { UserModel, UserDocument } from '../../classes/user.model';
import * as bcrypt from 'bcrypt';
import * as UserDto from '../../classes/users.dto';

@Injectable()
export class UsersPutService {
	constructor (@InjectModel(UserModel.name) private userEntity: Model<UserDocument>) {}

	async changePassword (_id: string, changePasswordInput: UserDto.ChangePasswordInput): Promise<User> {
		const user = await this.userEntity.findById(_id);
		if (!user) throw new NotFoundException('This user not found');
		const { newPassword, currentPassword } = changePasswordInput;

		// check password
		const isMatched = await bcrypt.compare(currentPassword, user.password);
		if (!isMatched) {
			throw new NotFoundException('Password Invalid');
		}

		user.password = newPassword;
		return await user.save();
	}

	async changePasswordByAdmin (changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin): Promise<User> {
		const { newPassword, _id } = changePasswordInputByAdmin;
		const user = await this.userEntity.findById(_id);
		if (!user) throw new NotFoundException('This user not found');

		user.password = newPassword;
		return await user.save();
	}

	async changeInformation (_id: string, changeInformationInput: UserDto.ChangeInformationInput): Promise<User> {
		let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInput, {
			new: true,
		});

		if (!user) throw new NotFoundException('This user not found');

		return await user.save();
	}

	async changeInformationByAdmin (
		_id: string,
		changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin,
	): Promise<User> {
		delete changeInformationInputByAdmin._id;

		const isExistsEmail = await this.userEntity.findOne({
			$and: [ { email: changeInformationInputByAdmin.email }, { _id: { $ne: _id } } ],
		});

		if (isExistsEmail) throw new NotFoundException('Email already exists');

		let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInputByAdmin, {
			new: true,
		});

		if (!user) throw new NotFoundException('This user not found');

		return await user.save();
	}
}

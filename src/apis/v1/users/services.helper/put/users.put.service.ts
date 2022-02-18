import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel, UserDocument } from '../../classes/user.model';
import * as bcrypt from 'bcrypt';
import * as UserDto from '../../classes/users.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';

@Injectable()
export class UsersPutService {
	constructor (
		@InjectModel(UserModel.name) private userEntity: Model<UserDocument>,
		private readonly cloudinary: CloudinaryService,
	) {}

	async changePassword (_id: string, changePasswordInput: UserDto.ChangePasswordInput): Promise<UserModel> {
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

	async changePasswordByAdmin (changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin): Promise<UserModel> {
		const { newPassword, _id } = changePasswordInputByAdmin;
		const user = await this.userEntity.findById(_id);
		if (!user) throw new NotFoundException('This user not found');

		user.password = newPassword;
		return await user.save();
	}

	async changeInformation (_id: string, changeInformationInput: UserDto.ChangeInformationInput): Promise<UserModel> {
		let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInput, {
			new: true,
		});

		if (!user) throw new NotFoundException('This user not found');

		return user;
	}

	async changeInformationByAdmin (
		_id: string,
		changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin,
	): Promise<UserModel> {
		delete changeInformationInputByAdmin._id;

		const isExistsEmail = await this.userEntity.findOne({
			$and: [ { email: changeInformationInputByAdmin.email }, { _id: { $ne: _id } } ],
		});

		if (isExistsEmail) throw new NotFoundException('Email already exists');

		let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInputByAdmin, {
			new: true,
		});

		if (!user) throw new NotFoundException('This user not found');

		return user;
	}

	async changeAvatar ({ avatar }: UserDto.ChangeAvatarInput, { _id: _userId }: IPayLoadToken): Promise<UserModel> {
		const user = await this.userEntity.findById(_userId);
		if (!user) throw new NotFoundException('This user not found');

		const oldAvatar = user.avatar;
		const public_id = await this.cloudinary.uploadImageUser(avatar);
		user.avatar = public_id;

		// delete old avatar
		this.cloudinary.deleteImage(oldAvatar);

		return await this.userEntity.findByIdAndUpdate(
			_userId,
			{ avatar: public_id },
			{
				new: true,
			},
		);
	}

	async changeEmail (
		{ newEmail, password }: UserDto.ChangeEmailInput,
		{ _id: _userId }: IPayLoadToken,
	): Promise<UserModel> {
		const user = await this.userEntity.findById(_userId);
		if (!user) throw new NotFoundException('This user not found');

		// check password
		const isMatched = await bcrypt.compare(password, user.password);
		if (!isMatched) {
			throw new NotFoundException('Email or Password Invalid');
		}

		return await this.userEntity.findByIdAndUpdate(_userId, { email: newEmail }, { new: true });
	}
}

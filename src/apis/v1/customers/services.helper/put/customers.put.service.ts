import { Injectable } from '@nestjs/common';
// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { CustomerModel, UserDocument } from '../../classes/customers.model';
// import * as bcrypt from 'bcrypt';
// import * as UserDto from '../../classes/customers.dto';
// import { IPayLoadToken } from 'helpers/modules/token/token.interface';
// import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';

@Injectable()
export class CustomersPutService {
	// constructor (
	// 	@InjectModel(CustomerModel.name) private userEntity: Model<UserDocument>,
	// 	private readonly cloudinary: CloudinaryService,
	// ) {}
	// async changePasswordByAdmin (
	// 	changePasswordInputByAdmin: UserDto.ChangePasswordCustomerInputByAdmin,
	// ): Promise<CustomerModel> {
	// 	const { newPassword, _id } = changePasswordInputByAdmin;
	// 	const user = await this.userEntity.findById(_id);
	// 	if (!user) throw new NotFoundException('This user not found');
	// 	user.password = newPassword;
	// 	return await user.save();
	// }
	// async changeInformationByAdmin (
	// 	_id: string,
	// 	changeInformationInputByAdmin: UserDto.ChangeInformationCustomerInputByAdmin,
	// ): Promise<CustomerModel> {
	// 	delete changeInformationInputByAdmin._id;
	// 	const isExistsEmail = await this.userEntity.findOne({
	// 		$and: [ { email: changeInformationInputByAdmin.email }, { _id: { $ne: _id } } ],
	// 	});
	// 	if (isExistsEmail) throw new NotFoundException('Email already exists');
	// 	let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInputByAdmin, {
	// 		new: true,
	// 	});
	// 	if (!user) throw new NotFoundException('This user not found');
	// 	return user;
	// }
	// async changeAvatar (
	// 	{ avatar }: UserDto.ChangeAvatarCustomerInput,
	// 	{ _id: _userId }: IPayLoadToken,
	// ): Promise<CustomerModel> {
	// 	const user = await this.userEntity.findById(_userId);
	// 	if (!user) throw new NotFoundException('This user not found');
	// 	const oldAvatar = user.avatar;
	// 	const public_id = await this.cloudinary.uploadImageUser(avatar);
	// 	user.avatar = public_id;
	// 	// delete old avatar
	// 	this.cloudinary.deleteImage(oldAvatar);
	// 	return await user.save();
	// }
}

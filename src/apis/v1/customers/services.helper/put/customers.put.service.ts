import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as UserDto from '../../classes/customers.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CustomerModel, CustomerDocument } from '../../classes/customers.model';

@Injectable()
export class CustomersPutService {
	constructor (@InjectModel(CustomerModel.name) private customerEntity: Model<CustomerDocument>) {}

	async changePasswordOfCustomerByAdmin (
		changePasswordInputByAdmin: UserDto.ChangePasswordOfCustomerByAdminInput,
		user: IPayLoadToken,
	): Promise<CustomerModel> {
		// TODO authorization
		const { newPassword, _id } = changePasswordInputByAdmin;
		const customer = await this.customerEntity.findById(_id);

		if (!customer) throw new NotFoundException('This customer not found');
		customer.password = newPassword;

		return await customer.save();
	}

	async changeInformationOfCustomerByAdmin (
		changeInformationInputByAdmin: UserDto.ChangeInformationOfCustomerByAdminInput,
		user: IPayLoadToken,
	): Promise<CustomerModel> {
		// TODO authorization
		const { _id } = changeInformationInputByAdmin;
		delete changeInformationInputByAdmin._id;

		const isExistsEmail = await this.customerEntity.findOne({
			$and: [ { email: changeInformationInputByAdmin.email }, { _id: { $ne: _id } } ],
		});

		if (isExistsEmail) throw new NotFoundException('Email already exists');
		let customer = await this.customerEntity.findByIdAndUpdate(_id, changeInformationInputByAdmin, {
			new: true,
		});

		if (!customer) throw new NotFoundException('This customer not found');
		return customer;
	}
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

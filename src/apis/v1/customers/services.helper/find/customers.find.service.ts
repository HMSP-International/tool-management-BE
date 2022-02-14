import { Injectable } from '@nestjs/common';
import { CustomerModel, UserDocument } from '../../classes/customers.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { RolesService } from 'apis/v1/roles/roles.service';

@Injectable()
export class CustomersFindService {
	constructor (@InjectModel(CustomerModel.name) private userEntity: Model<UserDocument>) {}
	// async findAll (): Promise<UserDocument[]> {
	// 	const users = await this.userEntity.find().select('-password');
	// 	if (users.length <= 0) throw new HttpException('Not Found Any User', HttpStatus.NO_CONTENT);
	// 	return users;
	// }
	// async findById (_id: string, getPassword: Boolean = false): Promise<UserDocument | null> {
	// 	if (getPassword === true) {
	// 		return await this.userEntity.findById(_id);
	// 	}
	// 	else {
	// 		return await this.userEntity.findById(_id).select('-password');
	// 	}
	// }
	async findByEmail (email: string): Promise<UserDocument | null> {
		const user = await this.userEntity.findOne({ email });
		return user;
	}
}

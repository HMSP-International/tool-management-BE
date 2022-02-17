import { Injectable } from '@nestjs/common';
import { CustomerModel, CustomerDocument } from '../../classes/customers.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { RolesService } from 'apis/v1/roles/roles.service';

@Injectable()
export class CustomersFindService {
	constructor (@InjectModel(CustomerModel.name) private userEntity: Model<CustomerDocument>) {}
	async findAll (): Promise<CustomerDocument[]> {
		const users = await this.userEntity.find().select('-password');
		return users;
	}
	// async findById (_id: string, getPassword: Boolean = false): Promise<UserDocument | null> {
	// 	if (getPassword === true) {
	// 		return await this.userEntity.findById(_id);
	// 	}
	// 	else {
	// 		return await this.userEntity.findById(_id).select('-password');
	// 	}
	// }
	async findByEmail (email: string): Promise<CustomerDocument | null> {
		const user = await this.userEntity.findOne({ email });
		return user;
	}
}

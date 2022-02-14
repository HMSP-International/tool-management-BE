import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomerModel, UserDocument } from '../../classes/customers.model';
import { CreateCustomerByAdminInput } from '../../classes/customers.dto';
import { CustomersFindService } from '../find/customers.find.service';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';
// import { SendersService } from 'helpers/modules/senders/senders.service';

@Injectable()
export class CustomersCreateService {
	constructor (
		@InjectModel(CustomerModel.name) private userEntity: Model<UserDocument>,
		private readonly customersFindService: CustomersFindService,
		private readonly cloudinary: CloudinaryService,
		// private readonly sendersService: SendersService,
	) {}

	async createCustomerByAdmin (createCustomerInput: CreateCustomerByAdminInput): Promise<CustomerModel> {
		{
			const customer = await this.customersFindService.findByEmail(createCustomerInput.email);
			if (customer) throw new HttpException('Email Already Exists', HttpStatus.CONFLICT);
		}

		{
			const public_id = await this.cloudinary.uploadImageCustomer(createCustomerInput.avatar);
			createCustomerInput.avatar = public_id;

			const newUser = await new this.userEntity(createCustomerInput).save();
			// invite email
			// await this.sendersService.sendCreateUser({
			// 	email: newUser.email,
			// 	password: createCustomerInput.password,
			// });

			newUser.password = null;

			return newUser;
		}
	}
}

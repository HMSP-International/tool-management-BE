import { Injectable } from '@nestjs/common';
import * as CustomerDto from './classes/customers.dto';
import { CreateCustomerByAdminInput } from './classes/customers.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CustomersPutService } from './services.helper/put/customers.put.service';
import { CustomersFindService } from './services.helper/find/customers.find.service';
import { CustomersDeleteService } from './services.helper/delete/customers.delete.service';
import { CustomersCreateService } from './services.helper/create/customers.create.service';

@Injectable()
export class CustomersService {
	constructor (
		private readonly customersCreateService: CustomersCreateService,
		private readonly customersDeleteService: CustomersDeleteService,
		private readonly customersPutService: CustomersPutService,
		private readonly customersFindService: CustomersFindService,
	) {}

	async createCustomerByAdmin (createUserInput: CreateCustomerByAdminInput) {
		return await this.customersCreateService.createCustomerByAdmin(createUserInput);
	}

	async deleteById (_id: string) {
		return await this.customersDeleteService.deleteById(_id);
	}

	async findAll () {
		return this.customersFindService.findAll();
	}

	// async findById (_id: string, getPassword: Boolean = false) {
	// 	return await this.customersFindService.findById(_id, getPassword);
	// }

	// async findByEmail (email: string) {
	// 	return await this.customersFindService.findByEmail(email);
	// }

	async changePasswordOfCustomerByAdmin (
		changePasswordInputByAdmin: CustomerDto.ChangePasswordOfCustomerByAdminInput,
		user: IPayLoadToken,
	) {
		return await this.customersPutService.changePasswordOfCustomerByAdmin(changePasswordInputByAdmin, user);
	}

	async changeInformationOfCustomerByAdmin (
		changeInformationInputByAdmin: CustomerDto.ChangeInformationOfCustomerByAdminInput,
		user: IPayLoadToken,
	) {
		return await this.customersPutService.changeInformationOfCustomerByAdmin(changeInformationInputByAdmin, user);
	}

	// changeAvatar (changeAvatar: UserDto.ChangeAvatarCustomerInput, user: IPayLoadToken) {
	// 	return this.customersPutService.changeAvatar(changeAvatar, user);
	// }
}

import { Injectable } from '@nestjs/common';
import { CreateCustomerByAdminInput } from './classes/customers.dto';
import { CustomersCreateService } from './services.helper/create/customers.create.service';
// import { CustomersPutService } from './services.helper/put/customers.put.service';
// import { CustomersFindService } from './services.helper/find/customers.find.service';
// import { CustomersDeleteService } from './services.helper/delete/customers.delete.service';
// import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Injectable()
export class CustomersService {
	constructor (
		private readonly customersCreateService: CustomersCreateService,
		// private readonly customersDeleteService: CustomersDeleteService,
		// private readonly customersFindService: CustomersFindService,
		// private readonly customersPutService: CustomersPutService,
	) {}

	async createCustomerByAdmin (createUserInput: CreateCustomerByAdminInput) {
		return await this.customersCreateService.createCustomerByAdmin(createUserInput);
	}

	// async deleteById (_id: string) {
	// 	return await this.customersDeleteService.deleteById(_id);
	// }

	// async findAll () {
	// 	return await this.customersFindService.findAll();
	// }

	// async findById (_id: string, getPassword: Boolean = false) {
	// 	return await this.customersFindService.findById(_id, getPassword);
	// }

	// async findByEmail (email: string) {
	// 	return await this.customersFindService.findByEmail(email);
	// }

	// async changePasswordByAdmin (changePasswordInputByAdmin: UserDto.ChangePasswordCustomerInputByAdmin) {
	// 	return await this.customersPutService.changePasswordByAdmin(changePasswordInputByAdmin);
	// }

	// async changeInformationByAdmin (
	// 	_id: string,
	// 	changeInformationInputByAdmin: UserDto.ChangeInformationCustomerInputByAdmin,
	// ) {
	// 	return await this.customersPutService.changeInformationByAdmin(_id, changeInformationInputByAdmin);
	// }

	// changeAvatar (changeAvatar: UserDto.ChangeAvatarCustomerInput, user: IPayLoadToken) {
	// 	return this.customersPutService.changeAvatar(changeAvatar, user);
	// }
}

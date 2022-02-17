import * as CustomerDto from './classes/customers.dto';
import { Customer } from './classes/customers.entity';
import { CustomersService } from './customers.service';
import { CustomerModel } from './classes/customers.model';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PERMISSIONS } from 'commons/decorator/permissions.decorator';
import { CurrentUser } from '../../../commons/decorator/CurrentUser.decorator';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
// import { IPayLoadToken } from 'helpers/modules/token/token.interface';
// import { CurrentUser } from 'common/decorator/CurrentUser.decorator';

@Resolver(() => Customer)
export class CustomersResolver {
	constructor (private readonly customersService: CustomersService) {}

	// ----------------------------------------- Query ----------------------------------------- //
	// @PERMISSIONS({ resolverName: 'getProfile' })
	// @Query(() => Customer)
	// async getProfile (@CurrentUser() user: IPayLoadToken): Promise<CustomerModel> {
	// 	return this.customersService.findById(user._id);
	// }

	// // --------------------------------------- End Query --------------------------------------- //

	// // ---------------------------------------- Mutaion ---------------------------------------- //
	@PERMISSIONS({ resolverName: 'getCustomers' })
	@Mutation(() => [ Customer ])
	async getCustomers () {
		return this.customersService.findAll();
	}

	@PERMISSIONS({ resolverName: 'createCustomerByAdminInput' })
	@Mutation(() => Customer)
	async createCustomerByAdmin (
		@Args('createCustomerByAdminInput') createCustomerByAdmin: CustomerDto.CreateCustomerByAdminInput,
	): Promise<CustomerModel> {
		return this.customersService.createCustomerByAdmin(createCustomerByAdmin);
	}

	@PERMISSIONS({ resolverName: 'chagePasswordOfCustomerByAdmin' })
	@Mutation(() => Customer)
	async chagePasswordOfCustomerByAdmin (
		@Args('changePasswordOfCustomerByAdminInput')
		changePasswordOfCustomerByAdmin: CustomerDto.ChangePasswordOfCustomerByAdminInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.customersService.changePasswordOfCustomerByAdmin(changePasswordOfCustomerByAdmin, user);
	}

	@PERMISSIONS({ resolverName: 'chageInformationOfCustomerByAdmin' })
	@Mutation(() => Customer)
	async chageInformationOfCustomerByAdmin (
		@Args('changeInformationOfCustomerByAdminInput')
		changeInformationOfCustomerByAdmin: CustomerDto.ChangeInformationOfCustomerByAdminInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.customersService.changeInformationOfCustomerByAdmin(changeInformationOfCustomerByAdmin, user);
	}

	// @Mutation(() => Customer)
	// async changeAvatar (
	// 	@Args('changeAvatarInput') changeAvatar: UserDto.ChangeAvatarCustomerInput,
	// 	@CurrentUser() user: IPayLoadToken,
	// ) {
	// 	return this.customersService.changeAvatar(changeAvatar, user);
	// }

	@PERMISSIONS({ resolverName: 'deleteCustomer' })
	@Mutation(() => Customer)
	async deleteCustomer (@Args('deleteCustomerInput') deleteCustomer: CustomerDto.DeleteCustomerInput) {
		return this.customersService.deleteById(deleteCustomer._id);
	}

	// -------------------------------------- End Mutaion -------------------------------------- //

	// ResolveField ---start
	// ResolveField ---end
}

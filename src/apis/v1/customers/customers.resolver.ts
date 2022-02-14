import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './classes/customers.entity';
import * as UserDto from './classes/customers.dto';
import { PERMISSIONS } from 'common/decorator/permissions.decorator';
// import { IPayLoadToken } from 'helpers/modules/token/token.interface';
// import { CurrentUser } from 'common/decorator/CurrentUser.decorator';
import { CustomerModel } from './classes/customers.model';

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
	// @PERMISSIONS({ resolverName: 'getUsers' })
	// @Mutation(() => [ Customer ])
	// async getUsers () {
	// 	return this.customersService.findAll();
	// }

	@PERMISSIONS({ resolverName: 'createCustomerByAdminInput' })
	@Mutation(() => Customer)
	async createCustomerByAdmin (
		@Args('createCustomerByAdminInput') createCustomerByAdmin: UserDto.CreateCustomerByAdminInput,
	): Promise<CustomerModel> {
		return this.customersService.createCustomerByAdmin(createCustomerByAdmin);
	}

	// @PERMISSIONS({ resolverName: 'chagePasswordByAdmin' })
	// @Mutation(() => Customer)
	// async chagePasswordByAdmin (
	// 	@Args('changePasswordInputByAdmin') changePasswordInputByAdmin: UserDto.ChangePasswordCustomerInputByAdmin,
	// ) {
	// 	return this.customersService.changePasswordByAdmin(changePasswordInputByAdmin);
	// }

	// @PERMISSIONS({ resolverName: 'chageInformationByAdmin' })
	// @Mutation(() => Customer)
	// async chageInformationByAdmin (
	// 	@Args('changeInformationInputByAdmin')
	// 	changeInformationInputByAdmin: UserDto.ChangeInformationCustomerInputByAdmin,
	// ) {
	// 	return this.customersService.changeInformationByAdmin(
	// 		changeInformationInputByAdmin._id,
	// 		changeInformationInputByAdmin,
	// 	);
	// }

	// @Mutation(() => Customer)
	// async changeAvatar (
	// 	@Args('changeAvatarInput') changeAvatar: UserDto.ChangeAvatarCustomerInput,
	// 	@CurrentUser() user: IPayLoadToken,
	// ) {
	// 	return this.customersService.changeAvatar(changeAvatar, user);
	// }

	// @PERMISSIONS({ resolverName: 'deleteUser' })
	// @Mutation(() => Customer)
	// async deleteUser (@Args('deleteUserInput') deleteUserInput: UserDto.DeleteCustomerInput) {
	// 	return this.customersService.deleteById(deleteUserInput._id);
	// }

	// -------------------------------------- End Mutaion -------------------------------------- //

	// ResolveField ---start
	// ResolveField ---end
}

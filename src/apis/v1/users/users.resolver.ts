import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './classes/user.entity';
import * as UserDto from './classes/users.dto';
import { IPayLoadToken } from '../../../helpers/modules/token/token.interface';
import { CurrentUser } from '../../../common/decorator/CurrentUser.decorator';
import { PERMISSIONS } from '../../../common/decorator/permissions.decorator';
import { UserModel } from './classes/user.model';

@Resolver(() => User)
export class UsersResolver {
	constructor (private readonly usersService: UsersService) {}

	// ----------------------------------------- Query ----------------------------------------- //
	@PERMISSIONS({ resolverName: 'getProfile' })
	@Query(() => User)
	async getProfile (@CurrentUser() user: IPayLoadToken): Promise<UserModel> {
		return this.usersService.findById(user._id);
	}

	// --------------------------------------- End Query --------------------------------------- //

	// ---------------------------------------- Mutaion ---------------------------------------- //
	@PERMISSIONS({ resolverName: 'getUsers' })
	@Mutation(() => [ User ])
	async getUsers (): Promise<UserModel[]> {
		return this.usersService.findAll();
	}

	@PERMISSIONS({ resolverName: 'createUser' })
	@Mutation(() => User)
	async createUser (@Args('createUserInput') createUserInput: UserDto.CreateUserInput): Promise<UserModel> {
		return this.usersService.createUser(createUserInput);
	}

	@Mutation(() => User)
	async chagePassword (
		@CurrentUser() user: IPayLoadToken,
		@Args('changePasswordInput') changePasswordInput: UserDto.ChangePasswordInput,
	): Promise<UserModel> {
		return this.usersService.changePassword(user._id, changePasswordInput);
	}

	@PERMISSIONS({ resolverName: 'chagePasswordByAdmin' })
	@Mutation(() => User)
	async chagePasswordByAdmin (
		@Args('changePasswordInputByAdmin') changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin,
	): Promise<UserModel> {
		return this.usersService.changePasswordByAdmin(changePasswordInputByAdmin);
	}

	@Mutation(() => User)
	async chageInformation (
		@CurrentUser() user: IPayLoadToken,
		@Args('changeInformationInput') changeInformationInput: UserDto.ChangeInformationInput,
	): Promise<UserModel> {
		return this.usersService.changeInformation(user._id, changeInformationInput);
	}

	@PERMISSIONS({ resolverName: 'chageInformationByAdmin' })
	@Mutation(() => User)
	async chageInformationByAdmin (
		@Args('changeInformationInputByAdmin') changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin,
	): Promise<UserModel> {
		return this.usersService.changeInformationByAdmin(
			changeInformationInputByAdmin._id,
			changeInformationInputByAdmin,
		);
	}

	@PERMISSIONS({ resolverName: 'deleteUser' })
	@Mutation(() => [ User ])
	async deleteUser (@Args('deleteUserInput') deleteUserInput: UserDto.DeleteUserInput): Promise<UserModel[]> {
		return this.usersService.deleteById(deleteUserInput._id);
	}

	// -------------------------------------- End Mutaion -------------------------------------- //
}

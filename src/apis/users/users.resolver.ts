import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import * as UserDto from './users.dto';
import { IPayLoadToken } from '../../helpers/modules/token/token.interface';
import { CurrentUser } from '../../common/decorator/CurrentUser.decorator';

@Resolver(() => User)
export class UsersResolver {
	constructor (private readonly usersService: UsersService) {}

	// ----------------------------------------- Query ----------------------------------------- //
	// @Roles(ROLE.admin)
	@Query(() => User)
	async getProfile (@CurrentUser() user: IPayLoadToken): Promise<User> {
		return this.usersService.findById(user._id);
	}

	// --------------------------------------- End Query --------------------------------------- //

	// ---------------------------------------- Mutaion ---------------------------------------- //
	// @Roles(ROLE.admin)
	@Mutation(() => [ User ])
	async getUsers (): Promise<User[]> {
		return this.usersService.findAll();
	}

	@Mutation(() => User)
	async createUser (
		@Args('createUserInput') createUserInput: UserDto.CreateUserInput,
	): Promise<User> {
		return this.usersService.createUser(createUserInput);
	}

	@Mutation(() => User)
	async chagePassword (
		@CurrentUser() user: IPayLoadToken,
		@Args('changePasswordInput') changePasswordInput: UserDto.ChangePasswordInput,
	): Promise<User> {
		return this.usersService.changePassword(user._id, changePasswordInput);
	}

	// TODO add role admin
	@Mutation(() => User)
	async chagePasswordByAdmin (
		@Args('changePasswordInputByAdmin')
		changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin,
	): Promise<User> {
		return this.usersService.changePasswordByAdmin(changePasswordInputByAdmin);
	}

	@Mutation(() => User)
	async chageInformation (
		@CurrentUser() user: IPayLoadToken,
		@Args('changeInformationInput') changeInformationInput: UserDto.ChangeInformationInput,
	): Promise<User> {
		return this.usersService.changeInformation(user._id, changeInformationInput);
	}

	// TODO add role admin
	@Mutation(() => User)
	async chageInformationByAdmin (
		@Args('changeInformationInputByAdmin')
		changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin,
	): Promise<User> {
		return this.usersService.changeInformationByAdmin(
			changeInformationInputByAdmin._id,
			changeInformationInputByAdmin,
		);
	}

	@Mutation(() => [ User ])
	async deleteUser (
		@Args('deleteUserInput') deleteUserInput: UserDto.DeleteUserInput,
	): Promise<User[]> {
		return this.usersService.deleteById(deleteUserInput._id);
	}

	// -------------------------------------- End Mutaion -------------------------------------- //
}

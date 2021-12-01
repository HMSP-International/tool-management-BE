import { UseGuards } from '@nestjs/common';
// import { IToken } from '../token/token.interface.';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import * as UserDto from './users.dto';
import { IPayLoadToken } from '../token/token.interface';
import { CurrentUser } from '../../common/decorator/CurrentUser.decorator';
import { Roles, ROLE } from '../../common/decorator/role.decorator';

@Resolver(() => User)
export class UsersResolver {
	constructor (private readonly usersService: UsersService) {}

	// ----------------------------------------- Query ----------------------------------------- //
	@Query(() => [ User ])
	@Roles(ROLE.admin)
	async getUsers (): Promise<User[]> {
		return this.usersService.findAll();
	}

	// @Roles(ROLE.admin)
	@Query(() => User)
	async getProfile (@CurrentUser() user: IPayLoadToken): Promise<User> {
		return this.usersService.findById(user._id);
	}

	// --------------------------------------- End Query --------------------------------------- //

	// ---------------------------------------- Mutaion ---------------------------------------- //
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

	@Mutation(() => User)
	async chageInformation (
		@CurrentUser() user: IPayLoadToken,
		@Args('changeInformationInput') changeInformationInput: UserDto.ChangeInformationInput,
	): Promise<User> {
		return this.usersService.changeInformation(user._id, changeInformationInput);
	}

	@Mutation(() => [ User ])
	async deleteUser (
		@Args('deleteUserInput') deleteUserInput: UserDto.DeleteUserInput,
	): Promise<User[]> {
		return this.usersService.deleteById(deleteUserInput._id);
	}

	// -------------------------------------- End Mutaion -------------------------------------- //
}

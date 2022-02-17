import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './classes/user.entity';
import * as UserDto from './classes/users.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CurrentUser } from '../../../commons/decorator/CurrentUser.decorator';
import { PERMISSIONS } from 'commons/decorator/permissions.decorator';
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

	@PERMISSIONS({ resolverName: 'getUserById' })
	@Query(() => User)
	async getUserById (@Args('getUserByIdInput') getUserById: UserDto.GetUserByIdInput): Promise<UserModel> {
		return this.usersService.findById(getUserById._userId);
	}

	// --------------------------------------- End Query --------------------------------------- //

	// ---------------------------------------- Mutaion ---------------------------------------- //
	@PERMISSIONS({ resolverName: 'getUsers' })
	@Mutation(() => [ User ])
	async getUsers () {
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
	) {
		return this.usersService.changePassword(user._id, changePasswordInput);
	}

	@PERMISSIONS({ resolverName: 'chagePasswordByAdmin' })
	@Mutation(() => User)
	async chagePasswordByAdmin (
		@Args('changePasswordInputByAdmin') changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin,
	) {
		return this.usersService.changePasswordByAdmin(changePasswordInputByAdmin);
	}

	@Mutation(() => User)
	async chageInformation (
		@CurrentUser() user: IPayLoadToken,
		@Args('changeInformationInput') changeInformationInput: UserDto.ChangeInformationInput,
	) {
		return this.usersService.changeInformation(user._id, changeInformationInput);
	}

	@PERMISSIONS({ resolverName: 'chageInformationByAdmin' })
	@Mutation(() => User)
	async chageInformationByAdmin (
		@Args('changeInformationInputByAdmin') changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin,
	) {
		return this.usersService.changeInformationByAdmin(
			changeInformationInputByAdmin._id,
			changeInformationInputByAdmin,
		);
	}

	@Mutation(() => User)
	async changeAvatar (
		@Args('changeAvatarInput') changeAvatar: UserDto.ChangeAvatarInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.usersService.changeAvatar(changeAvatar, user);
	}

	@Mutation(() => User)
	async changeEmail (
		@Args('changeEmailInput') changeEmail: UserDto.ChangeEmailInput,
		@CurrentUser() user: IPayLoadToken,
	) {
		return this.usersService.changeEmail(changeEmail, user);
	}

	@PERMISSIONS({ resolverName: 'deleteUser' })
	@Mutation(() => User)
	async deleteUser (@Args('deleteUserInput') deleteUserInput: UserDto.DeleteUserInput) {
		return this.usersService.deleteById(deleteUserInput._id);
	}

	// -------------------------------------- End Mutaion -------------------------------------- //

	// ResolveField ---start

	@ResolveField(() => User)
	_roleId (@Parent() user: User) {
		return this.usersService.getRole(user._roleId);
	}
	// ResolveField ---end
}

import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './classes/users.dto';
import { User } from './classes/user.entity';
import * as UserDto from './classes/users.dto';
import { UsersPutService } from './services.helper/put/users.put.service';
import { UsersFindService } from './services.helper/find/users.find.service';
import { UsersDeleteService } from './services.helper/delete/users.delete.service';
import { UsersCreateService } from './services.helper/create/users.create.service';

@Injectable()
export class UsersService {
	constructor (
		private readonly usersCreateService: UsersCreateService,
		private readonly usersDeleteService: UsersDeleteService,
		private readonly usersFindService: UsersFindService,
		private readonly usersPutService: UsersPutService,
	) {}

	async createUser (createUserInput: CreateUserInput): Promise<User> {
		return await this.usersCreateService.createUser(createUserInput);
	}

	async deleteById (_id: string): Promise<User[]> {
		return await this.usersDeleteService.deleteById(_id);
	}

	async findAll (): Promise<User[]> {
		return await this.usersFindService.findAll();
	}

	async findById (_id: string, getPassword: Boolean = false): Promise<User | null> {
		return await this.usersFindService.findById(_id, getPassword);
	}

	async findByEmail (email: string): Promise<User | null> {
		return await this.usersFindService.findByEmail(email);
	}

	async changePassword (_id: string, changePasswordInput: UserDto.ChangePasswordInput): Promise<User> {
		return await this.usersPutService.changePassword(_id, changePasswordInput);
	}

	async changePasswordByAdmin (changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin): Promise<User> {
		return await this.usersPutService.changePasswordByAdmin(changePasswordInputByAdmin);
	}

	async changeInformation (_id: string, changeInformationInput: UserDto.ChangeInformationInput): Promise<User> {
		return await this.usersPutService.changeInformation(_id, changeInformationInput);
	}

	async changeInformationByAdmin (
		_id: string,
		changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin,
	): Promise<User> {
		return await this.usersPutService.changeInformationByAdmin(_id, changeInformationInputByAdmin);
	}
}

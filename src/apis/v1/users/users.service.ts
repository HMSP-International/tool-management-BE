import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './classes/users.dto';
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

	async createUser (createUserInput: CreateUserInput) {
		return await this.usersCreateService.createUser(createUserInput);
	}

	async deleteById (_id: string) {
		return await this.usersDeleteService.deleteById(_id);
	}

	async findAll () {
		return await this.usersFindService.findAll();
	}

	async findById (_id: string, getPassword: Boolean = false) {
		return await this.usersFindService.findById(_id, getPassword);
	}

	async findByEmail (email: string) {
		return await this.usersFindService.findByEmail(email);
	}

	async changePassword (_id: string, changePasswordInput: UserDto.ChangePasswordInput) {
		return await this.usersPutService.changePassword(_id, changePasswordInput);
	}

	async changePasswordByAdmin (changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin) {
		return await this.usersPutService.changePasswordByAdmin(changePasswordInputByAdmin);
	}

	async changeInformation (_id: string, changeInformationInput: UserDto.ChangeInformationInput) {
		return await this.usersPutService.changeInformation(_id, changeInformationInput);
	}

	async changeInformationByAdmin (_id: string, changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin) {
		return await this.usersPutService.changeInformationByAdmin(_id, changeInformationInputByAdmin);
	}

	async getRole (_id: string) {
		return await this.usersFindService.findRoleById(_id);
	}
}

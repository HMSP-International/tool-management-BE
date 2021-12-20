import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RolesService } from '../../../roles/roles.service';
import { User } from '../../classes/user.entity';
import { UserModel, UserDocument } from '../../classes/user.model';
import { CreateUserInput } from '../../classes/users.dto';
import { UsersFindService } from '../find/users.find.service';

@Injectable()
export class UsersCreateService {
	constructor (
		@InjectModel(UserModel.name) private userEntity: Model<UserDocument>,
		private readonly usersFindService: UsersFindService,
		private readonly rolesService: RolesService,
	) {}

	async createUser (createUserInput: CreateUserInput): Promise<UserModel> {
		{
			const user = await this.usersFindService.findByEmail(createUserInput.email);
			if (user) throw new HttpException('Email Already Exists', HttpStatus.CONFLICT);
		}

		{
			const role = await this.rolesService.findById(createUserInput._roleId);
			if (!role) throw new HttpException('Not Found role = ' + createUserInput._roleId, HttpStatus.BAD_REQUEST);
		}

		{
			const user = await new this.userEntity(createUserInput);
			const newUser = await user.save();
			newUser.password = null;
			return newUser;
		}
	}
}

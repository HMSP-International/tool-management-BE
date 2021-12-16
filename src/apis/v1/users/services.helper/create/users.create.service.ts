import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../classes/user.entity';
import { UserModel, UserDocument } from '../../classes/user.model';
import { CreateUserInput } from '../../classes/users.dto';
import { UsersFindService } from '../find/users.find.service';

@Injectable()
export class UsersCreateService {
	constructor (
		@InjectModel(UserModel.name) private userEntity: Model<UserDocument>,
		private readonly usersFindService: UsersFindService,
	) {}

	async createUser (createUserInput: CreateUserInput): Promise<User> {
		{
			const user = await this.usersFindService.findByEmail(createUserInput.email);
			if (user) throw new HttpException('Email Already Exists', HttpStatus.CONFLICT);
		}

		{
			const user = await new this.userEntity(createUserInput);
			const newUser = await user.save();
			newUser.password = null;
			return newUser;
		}
	}
}

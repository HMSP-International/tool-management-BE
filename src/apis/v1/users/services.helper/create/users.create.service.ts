import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RolesService } from 'apis/v1/roles/roles.service';
import { UserModel, UserDocument } from '../../classes/user.model';
import { CreateUserInput } from '../../classes/users.dto';
import { UsersFindService } from '../find/users.find.service';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';
import { SendersService } from 'helpers/modules/senders/senders.service';

@Injectable()
export class UsersCreateService {
	constructor (
		@InjectModel(UserModel.name) private userEntity: Model<UserDocument>,
		private readonly usersFindService: UsersFindService,
		private readonly rolesService: RolesService,
		private readonly cloudinary: CloudinaryService,
		private readonly sendersService: SendersService,
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
			const public_id = await this.cloudinary.uploadImage(createUserInput.avatar);
			createUserInput.avatar = public_id;

			const newUser = await new this.userEntity(createUserInput).save();
			// invite email
			await this.sendersService.sendCreateUser({
				email: newUser.email,
				password: createUserInput.password,
			});

			newUser.password = null;

			return newUser;
		}
	}
}

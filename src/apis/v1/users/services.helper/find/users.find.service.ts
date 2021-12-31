import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleDocument } from 'apis/v1/roles/classes/role.model';
import { RolesService } from 'apis/v1/roles/roles.service';
import { UserModel, UserDocument } from '../../classes/user.model';

@Injectable()
export class UsersFindService {
	constructor (
		@InjectModel(UserModel.name) private userEntity: Model<UserDocument>,
		private rolesService: RolesService,
	) {}

	async findAll (): Promise<UserDocument[]> {
		const users = await this.userEntity.find().select('-password');
		if (users.length <= 0) throw new HttpException('Not Found Any User', HttpStatus.NO_CONTENT);
		return users;
	}

	async findById (_id: string, getPassword: Boolean = false): Promise<UserDocument | null> {
		if (getPassword === true) {
			return await this.userEntity.findById(_id);
		}
		else {
			return await this.userEntity.findById(_id).select('-password');
		}
	}

	async findByEmail (email: string): Promise<UserDocument | null> {
		const user = await this.userEntity.findOne({ email }).populate('_roleId');

		return user;
	}

	async findRoleById (_id: string): Promise<RoleDocument> {
		const role = await this.rolesService.findById(_id);

		if (!role) throw new HttpException('Not Found role', HttpStatus.NO_CONTENT);

		return role;
	}
}

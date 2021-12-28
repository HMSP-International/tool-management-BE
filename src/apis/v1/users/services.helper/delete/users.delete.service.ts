import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CloudinaryService } from '../../../../../helpers/modules/cloudinary/cloudinary.service';
import { Model } from 'mongoose';
import { UserModel, UserDocument } from '../../classes/user.model';

@Injectable()
export class UsersDeleteService {
	constructor (
		@InjectModel(UserModel.name) private userEntity: Model<UserDocument>,
		private readonly cloudinary: CloudinaryService,
	) {}

	async deleteById (_id: string): Promise<UserModel> {
		const user = await this.userEntity.findByIdAndDelete(_id);

		if (user === null)
			throw new NotFoundException('This user not found or maybe deleted, please refresh your page');

		this.cloudinary.deleteImage(user.avatar);

		return user;
	}
}

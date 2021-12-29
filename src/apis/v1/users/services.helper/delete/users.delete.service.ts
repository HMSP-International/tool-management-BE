import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CloudinaryService } from '../../../../../helpers/modules/cloudinary/cloudinary.service';
import { UserModel, UserDocument } from '../../classes/user.model';
import { CollaboratorsService } from '../../../collaborators/collaborators.service';
import { PaticipantsService } from '../../../paticipants/paticipants.service';

@Injectable()
export class UsersDeleteService {
	constructor (
		@InjectModel(UserModel.name) private userEntity: Model<UserDocument>,
		private readonly cloudinary: CloudinaryService,
		@Inject(forwardRef(() => CollaboratorsService))
		private collaboratorsService: CollaboratorsService,
		@Inject(forwardRef(() => PaticipantsService))
		private paticipantsService: PaticipantsService,
	) {}

	async deleteById (_id: string): Promise<UserModel> {
		const user = await this.userEntity.findByIdAndDelete(_id);

		if (user === null)
			throw new NotFoundException('This user not found or maybe deleted, please refresh your page');

		this.cloudinary.deleteImage(user.avatar);

		const collaborators = await this.collaboratorsService.findByMemberId(_id);
		await this.collaboratorsService.deleteByMemberId(_id);

		const collaboratorsId: string[] = collaborators.map(c => c._id);
		await this.paticipantsService.deleteByCollboratorsId(collaboratorsId);

		return user;
	}
}

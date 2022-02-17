import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';
import { CustomerModel, CustomerDocument } from '../../classes/customers.model';
// import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
// import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';

@Injectable()
export class CustomersDeleteService {
	constructor (
		@InjectModel(CustomerModel.name) private customerEntity: Model<CustomerDocument>,
		// @Inject(forwardRef(() => CollaboratorsService))
		// private collaboratorsService: CollaboratorsService,
		// @Inject(forwardRef(() => PaticipantsService))
		// private paticipantsService: PaticipantsService,
		private readonly cloudinary: CloudinaryService,
	) {}
	async deleteById (_id: string): Promise<CustomerModel> {
		const customer = await this.customerEntity.findByIdAndDelete(_id);
		if (customer === null)
			throw new NotFoundException('This user not found or maybe deleted, please refresh your page');
		this.cloudinary.deleteImage(customer.avatar);
		// const collaborators = await this.collaboratorsService.findByMemberId(_id);
		// await this.collaboratorsService.deleteByMemberId(_id);
		// const collaboratorsId: string[] = collaborators.map(c => c._id);
		// await this.paticipantsService.deleteByCollboratorsId(collaboratorsId);
		return customer;
	}
}

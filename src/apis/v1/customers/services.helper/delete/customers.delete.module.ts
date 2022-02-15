import { CustomersDeleteService } from './customers.delete.service';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
// import { PaticipantsModule } from 'apis/v1/paticipants/paticipants.module';
import { CloudinaryModule } from 'helpers/modules/cloudinary/cloudinary.module';
import { CustomerModel, CustomerSchema } from '../../classes/customers.model';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: CustomerModel.name, schema: CustomerSchema } ]),
			// forwardRef(() => CollaboratorsModule),
			// forwardRef(() => PaticipantsModule),
			forwardRef(() => CloudinaryModule),
		],
	providers: [ CustomersDeleteService ],
	exports: [ CustomersDeleteService ],
})
export class CustomersDeleteModule {}

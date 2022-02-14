import { CustomersDeleteService } from './customers.delete.service';
import { Module } from '@nestjs/common';
// import { forwardRef, Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
// import { CloudinaryModule } from 'helpers/modules/cloudinary/cloudinary.module';
// import { CustomerModel, UserSchema } from '../../classes/customers.model';
// import { PaticipantsModule } from 'apis/v1/paticipants/paticipants.module';

@Module({
	// imports:
	// 	[
	// 		MongooseModule.forFeature([ { name: CustomerModel.name, schema: UserSchema } ]),
	// 		forwardRef(() => CloudinaryModule),
	// 		forwardRef(() => CollaboratorsModule),
	// 		forwardRef(() => PaticipantsModule),
	// 	],
	providers: [ CustomersDeleteService ],
	exports: [ CustomersDeleteService ],
})
export class CustomersDeleteModule {}

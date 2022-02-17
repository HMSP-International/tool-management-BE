import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModel, CustomerSchema } from '../../classes/customers.model';
import { CustomersCreateService } from './customers.create.service';
import { CustomersFindModule } from '../find/customers.find.module';
import { CloudinaryModule } from 'helpers/modules/cloudinary/cloudinary.module';
// import { SendersModule } from 'helpers/modules/senders/senders.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: CustomerModel.name, schema: CustomerSchema } ]),
			CustomersFindModule,
			CloudinaryModule,
			// SendersModule,
		],
	providers: [ CustomersCreateService ],
	exports: [ CustomersCreateService ],
})
export class CustomersCreateModule {}

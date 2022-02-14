import { CustomersFindService } from './customers.find.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModel, CustomerSchema } from '../../classes/customers.model';

@Module({
	imports: [ MongooseModule.forFeature([ { name: CustomerModel.name, schema: CustomerSchema } ]) ],
	providers: [ CustomersFindService ],
	exports: [ CustomersFindService ],
})
export class CustomersFindModule {}

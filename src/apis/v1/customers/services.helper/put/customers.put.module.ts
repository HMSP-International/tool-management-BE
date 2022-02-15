import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersPutService } from './customers.put.service';
import { CustomerModel, CustomerSchema } from '../../classes/customers.model';

@Module({
	imports: [ MongooseModule.forFeature([ { name: CustomerModel.name, schema: CustomerSchema } ]) ],
	providers: [ CustomersPutService ],
	exports: [ CustomersPutService ],
})
export class CustomersPutModule {}

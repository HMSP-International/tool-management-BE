import { Module } from '@nestjs/common';
import { CustomersPutService } from './customers.put.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { CloudinaryModule } from 'helpers/modules/cloudinary/cloudinary.module';
// import { CustomerModel, UserSchema } from '../../classes/customers.model';

@Module({
	// imports: [ MongooseModule.forFeature([ { name: CustomerModel.name, schema: UserSchema } ]), CloudinaryModule, ],
	providers: [ CustomersPutService ],
	exports: [ CustomersPutService ],
})
export class CustomersPutModule {}

import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { CustomersCreateModule } from './services.helper/create/customers.create.module';
import { CustomersDeleteModule } from './services.helper/delete/customers.delete.module';
import { CustomersFindModule } from './services.helper/find/customers.find.module';
import { CustomersPutModule } from './services.helper/put/customers.put.module';
import { PermissionsModule } from 'apis/v1/permissions/permissions.module';
@Module({
	imports: [ CustomersCreateModule, CustomersDeleteModule, CustomersFindModule, CustomersPutModule, PermissionsModule ],
	providers: [ CustomersResolver, CustomersService ],
	exports: [ CustomersService ],
})
export class CustomersModule {}

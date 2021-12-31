import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersCreateModule } from './services.helper/create/users.create.module';
import { UsersDeleteModule } from './services.helper/delete/users.delete.module';
import { UsersFindModule } from './services.helper/find/users.find.module';
import { UsersPutModule } from './services.helper/put/users.put.module';
import { PermissionsModule } from 'apis/v1/permissions/permissions.module';
@Module({
	imports: [ UsersCreateModule, UsersDeleteModule, UsersFindModule, UsersPutModule, PermissionsModule ],
	providers: [ UsersResolver, UsersService ],
	exports: [ UsersService ],
})
export class UsersModule {}

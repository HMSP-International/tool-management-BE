import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsResolver } from './permissions.resolver';
import { PermissionsFindModule } from './services.helper/find/permissions.find.module';

@Module({
	imports: [ PermissionsFindModule ],
	providers: [ PermissionsResolver, PermissionsService ],
	exports: [ PermissionsService ],
})
export class PermissionsModule {}

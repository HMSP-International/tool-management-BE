import { forwardRef, Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { RolesFindModule } from './services.helper/find/roles.find.module';
import { PermissionsModule } from '../permissions/permissions.module';

@Module({
	imports: [ RolesFindModule, forwardRef(() => PermissionsModule) ],
	providers: [ RolesResolver, RolesService ],
	exports: [ RolesService ],
})
export class RolesModule {}

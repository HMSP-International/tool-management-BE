import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { RolesFindModule } from './services.helper/find/roles.find.module';

@Module({
	imports: [ RolesFindModule ],
	providers: [ RolesResolver, RolesService ],
	exports: [ RolesService ],
})
export class RolesModule {}

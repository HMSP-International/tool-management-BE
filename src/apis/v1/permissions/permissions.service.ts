import { Injectable } from '@nestjs/common';
import { PermissionsFindService } from './services.helper/find/permissions.find.service';

@Injectable()
export class PermissionsService {
	constructor (private readonly permissionsFindService: PermissionsFindService) {}

	findByRoleIdAndResolverName (roleName: string, resolverName: string) {
		return this.permissionsFindService.findByRoleIdAndResolverName(roleName, resolverName);
	}
}

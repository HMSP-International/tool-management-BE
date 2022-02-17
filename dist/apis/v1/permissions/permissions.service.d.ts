import { PermissionsFindService } from './services.helper/find/permissions.find.service';
export declare class PermissionsService {
    private readonly permissionsFindService;
    constructor(permissionsFindService: PermissionsFindService);
    findByRoleIdAndResolverName(roleName: string, resolverName: string): Promise<boolean>;
}

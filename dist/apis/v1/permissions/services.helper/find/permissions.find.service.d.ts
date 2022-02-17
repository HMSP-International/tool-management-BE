import { Model } from 'mongoose';
import { RolesService } from 'apis/v1/roles/roles.service';
import { PermissionDocument } from '../../classes/permission.model';
export declare class PermissionsFindService {
    private permissionEntity;
    private readonly rolesService;
    constructor(permissionEntity: Model<PermissionDocument>, rolesService: RolesService);
    findByRoleIdAndResolverName(roleName: string, resolverName: string): Promise<boolean>;
}

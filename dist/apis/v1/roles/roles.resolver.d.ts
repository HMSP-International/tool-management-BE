import { RolesService } from './roles.service';
export declare class RolesResolver {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    getRoles(): Promise<import("./classes/role.model").RoleDocument[]>;
}

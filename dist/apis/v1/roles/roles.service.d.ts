import { RolesFindService } from './services.helper/find/roles.find.service';
export declare class RolesService {
    private readonly rolesFindService;
    constructor(rolesFindService: RolesFindService);
    findById(_id: string): Promise<import("./classes/role.model").RoleDocument>;
    findAll(): Promise<import("./classes/role.model").RoleDocument[]>;
    findByName(roleName: string): Promise<import("./classes/role.model").RoleDocument>;
}

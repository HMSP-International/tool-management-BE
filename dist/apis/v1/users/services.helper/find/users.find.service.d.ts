import { Model } from 'mongoose';
import { RoleDocument } from 'apis/v1/roles/classes/role.model';
import { RolesService } from 'apis/v1/roles/roles.service';
import { UserDocument } from '../../classes/user.model';
export declare class UsersFindService {
    private userEntity;
    private rolesService;
    constructor(userEntity: Model<UserDocument>, rolesService: RolesService);
    findAll(): Promise<UserDocument[]>;
    findById(_id: string, getPassword?: Boolean): Promise<UserDocument | null>;
    findByEmail(email: string): Promise<UserDocument | null>;
    findRoleById(_id: string): Promise<RoleDocument>;
}

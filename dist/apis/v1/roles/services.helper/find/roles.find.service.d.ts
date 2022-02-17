import { Model } from 'mongoose';
import { RoleDocument } from '../../classes/role.model';
export declare class RolesFindService {
    private roleEntity;
    constructor(roleEntity: Model<RoleDocument>);
    findById(_id: string): Promise<RoleDocument | null>;
    findAll(): Promise<RoleDocument[]>;
    findByName(roleName: string): Promise<RoleDocument | null>;
}

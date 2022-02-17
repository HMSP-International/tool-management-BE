import { CustomerDocument } from '../../classes/customers.model';
import { Model } from 'mongoose';
export declare class CustomersFindService {
    private userEntity;
    constructor(userEntity: Model<CustomerDocument>);
    findAll(): Promise<CustomerDocument[]>;
    findByEmail(email: string): Promise<CustomerDocument | null>;
}

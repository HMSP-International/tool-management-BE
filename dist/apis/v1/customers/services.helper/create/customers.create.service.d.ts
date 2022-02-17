import { Model } from 'mongoose';
import { CustomerModel, CustomerDocument } from '../../classes/customers.model';
import { CreateCustomerByAdminInput } from '../../classes/customers.dto';
import { CustomersFindService } from '../find/customers.find.service';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';
export declare class CustomersCreateService {
    private userEntity;
    private readonly customersFindService;
    private readonly cloudinary;
    constructor(userEntity: Model<CustomerDocument>, customersFindService: CustomersFindService, cloudinary: CloudinaryService);
    createCustomerByAdmin(createCustomerInput: CreateCustomerByAdminInput): Promise<CustomerModel>;
}

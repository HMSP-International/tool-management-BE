import { Model } from 'mongoose';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';
import { CustomerModel, CustomerDocument } from '../../classes/customers.model';
export declare class CustomersDeleteService {
    private customerEntity;
    private readonly cloudinary;
    constructor(customerEntity: Model<CustomerDocument>, cloudinary: CloudinaryService);
    deleteById(_id: string): Promise<CustomerModel>;
}

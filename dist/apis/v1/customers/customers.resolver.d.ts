import * as CustomerDto from './classes/customers.dto';
import { CustomersService } from './customers.service';
import { CustomerModel } from './classes/customers.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class CustomersResolver {
    private readonly customersService;
    constructor(customersService: CustomersService);
    getCustomers(): Promise<import("./classes/customers.model").CustomerDocument[]>;
    createCustomerByAdmin(createCustomerByAdmin: CustomerDto.CreateCustomerByAdminInput): Promise<CustomerModel>;
    chagePasswordOfCustomerByAdmin(changePasswordOfCustomerByAdmin: CustomerDto.ChangePasswordOfCustomerByAdminInput, user: IPayLoadToken): Promise<CustomerModel>;
    chageInformationOfCustomerByAdmin(changeInformationOfCustomerByAdmin: CustomerDto.ChangeInformationOfCustomerByAdminInput, user: IPayLoadToken): Promise<CustomerModel>;
    deleteCustomer(deleteCustomer: CustomerDto.DeleteCustomerInput): Promise<CustomerModel>;
}

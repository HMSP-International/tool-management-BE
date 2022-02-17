import * as CustomerDto from './classes/customers.dto';
import { CreateCustomerByAdminInput } from './classes/customers.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CustomersPutService } from './services.helper/put/customers.put.service';
import { CustomersFindService } from './services.helper/find/customers.find.service';
import { CustomersDeleteService } from './services.helper/delete/customers.delete.service';
import { CustomersCreateService } from './services.helper/create/customers.create.service';
export declare class CustomersService {
    private readonly customersCreateService;
    private readonly customersDeleteService;
    private readonly customersPutService;
    private readonly customersFindService;
    constructor(customersCreateService: CustomersCreateService, customersDeleteService: CustomersDeleteService, customersPutService: CustomersPutService, customersFindService: CustomersFindService);
    createCustomerByAdmin(createUserInput: CreateCustomerByAdminInput): Promise<import("./classes/customers.model").CustomerModel>;
    deleteById(_id: string): Promise<import("./classes/customers.model").CustomerModel>;
    findAll(): Promise<import("./classes/customers.model").CustomerDocument[]>;
    changePasswordOfCustomerByAdmin(changePasswordInputByAdmin: CustomerDto.ChangePasswordOfCustomerByAdminInput, user: IPayLoadToken): Promise<import("./classes/customers.model").CustomerModel>;
    changeInformationOfCustomerByAdmin(changeInformationInputByAdmin: CustomerDto.ChangeInformationOfCustomerByAdminInput, user: IPayLoadToken): Promise<import("./classes/customers.model").CustomerModel>;
}

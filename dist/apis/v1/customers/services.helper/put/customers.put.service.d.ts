import { Model } from 'mongoose';
import * as UserDto from '../../classes/customers.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CustomerModel, CustomerDocument } from '../../classes/customers.model';
export declare class CustomersPutService {
    private customerEntity;
    constructor(customerEntity: Model<CustomerDocument>);
    changePasswordOfCustomerByAdmin(changePasswordInputByAdmin: UserDto.ChangePasswordOfCustomerByAdminInput, user: IPayLoadToken): Promise<CustomerModel>;
    changeInformationOfCustomerByAdmin(changeInformationInputByAdmin: UserDto.ChangeInformationOfCustomerByAdminInput, user: IPayLoadToken): Promise<CustomerModel>;
}

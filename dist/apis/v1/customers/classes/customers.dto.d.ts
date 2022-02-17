export declare class CreateCustomerByAdminInput {
    avatar: string;
    email: string;
    password: string;
    displayName: string;
}
export declare class DeleteCustomerInput {
    _id: string;
}
export declare class ChangePasswordOfCustomerByAdminInput {
    _id: string;
    newPassword: string;
}
export declare class ChangeInformationOfCustomerByAdminInput {
    displayName: string;
    _id: string;
    email: string;
}

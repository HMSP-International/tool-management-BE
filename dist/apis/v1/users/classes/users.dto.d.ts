export declare class CreateUserInput {
    avatar: string;
    email: string;
    password: string;
    displayName: string;
    _roleId: string;
    department: string;
    position: string;
    title: string;
}
export declare class DeleteUserInput {
    _id: string;
}
export declare class ChangePasswordInput {
    currentPassword: string;
    newPassword: string;
}
export declare class ChangePasswordInputByAdmin {
    _id: string;
    newPassword: string;
}
export declare class ChangeInformationInput {
    displayName: string;
}
export declare class ChangeInformationInputByAdmin {
    displayName: string;
    _id: string;
    email: string;
    title: string;
    position: string;
    department: string;
    _roleId: string;
}
export declare class DeleteUserOutput {
    status: boolean;
}
export declare class GetUserByIdInput {
    _userId: string;
}
export declare class ChangeAvatarInput {
    avatar: string;
}
export declare class ChangeEmailInput {
    newEmail: string;
    password: string;
}

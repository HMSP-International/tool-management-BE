import { UsersService } from './users.service';
import { User } from './classes/user.entity';
import * as UserDto from './classes/users.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { UserModel } from './classes/user.model';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(user: IPayLoadToken): Promise<UserModel>;
    getUserById(getUserById: UserDto.GetUserByIdInput): Promise<UserModel>;
    getUsers(): Promise<import("./classes/user.model").UserDocument[]>;
    createUser(createUserInput: UserDto.CreateUserInput): Promise<UserModel>;
    chagePassword(user: IPayLoadToken, changePasswordInput: UserDto.ChangePasswordInput): Promise<UserModel>;
    chagePasswordByAdmin(changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin): Promise<UserModel>;
    chageInformation(user: IPayLoadToken, changeInformationInput: UserDto.ChangeInformationInput): Promise<UserModel>;
    chageInformationByAdmin(changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin): Promise<UserModel>;
    changeAvatar(changeAvatar: UserDto.ChangeAvatarInput, user: IPayLoadToken): Promise<UserModel>;
    changeEmail(changeEmail: UserDto.ChangeEmailInput, user: IPayLoadToken): Promise<UserModel>;
    deleteUser(deleteUserInput: UserDto.DeleteUserInput): Promise<UserModel>;
    _roleId(user: User): Promise<import("../roles/classes/role.model").RoleDocument>;
}

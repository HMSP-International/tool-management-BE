import { CreateUserInput } from './classes/users.dto';
import * as UserDto from './classes/users.dto';
import { UsersPutService } from './services.helper/put/users.put.service';
import { UsersFindService } from './services.helper/find/users.find.service';
import { UsersDeleteService } from './services.helper/delete/users.delete.service';
import { UsersCreateService } from './services.helper/create/users.create.service';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class UsersService {
    private readonly usersCreateService;
    private readonly usersDeleteService;
    private readonly usersFindService;
    private readonly usersPutService;
    constructor(usersCreateService: UsersCreateService, usersDeleteService: UsersDeleteService, usersFindService: UsersFindService, usersPutService: UsersPutService);
    createUser(createUserInput: CreateUserInput): Promise<import("./classes/user.model").UserModel>;
    deleteById(_id: string): Promise<import("./classes/user.model").UserModel>;
    findAll(): Promise<import("./classes/user.model").UserDocument[]>;
    findById(_id: string, getPassword?: Boolean): Promise<import("./classes/user.model").UserDocument>;
    findByEmail(email: string): Promise<import("./classes/user.model").UserDocument>;
    changePassword(_id: string, changePasswordInput: UserDto.ChangePasswordInput): Promise<import("./classes/user.model").UserModel>;
    changePasswordByAdmin(changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin): Promise<import("./classes/user.model").UserModel>;
    changeInformation(_id: string, changeInformationInput: UserDto.ChangeInformationInput): Promise<import("./classes/user.model").UserModel>;
    changeInformationByAdmin(_id: string, changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin): Promise<import("./classes/user.model").UserModel>;
    changeAvatar(changeAvatar: UserDto.ChangeAvatarInput, user: IPayLoadToken): Promise<import("./classes/user.model").UserModel>;
    changeEmail(changeEmail: UserDto.ChangeEmailInput, user: IPayLoadToken): Promise<import("./classes/user.model").UserModel>;
    getRole(_id: string): Promise<import("../roles/classes/role.model").RoleDocument>;
}

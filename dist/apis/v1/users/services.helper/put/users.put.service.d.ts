import { Model } from 'mongoose';
import { UserModel, UserDocument } from '../../classes/user.model';
import * as UserDto from '../../classes/users.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';
export declare class UsersPutService {
    private userEntity;
    private readonly cloudinary;
    constructor(userEntity: Model<UserDocument>, cloudinary: CloudinaryService);
    changePassword(_id: string, changePasswordInput: UserDto.ChangePasswordInput): Promise<UserModel>;
    changePasswordByAdmin(changePasswordInputByAdmin: UserDto.ChangePasswordInputByAdmin): Promise<UserModel>;
    changeInformation(_id: string, changeInformationInput: UserDto.ChangeInformationInput): Promise<UserModel>;
    changeInformationByAdmin(_id: string, changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin): Promise<UserModel>;
    changeAvatar({ avatar }: UserDto.ChangeAvatarInput, { _id: _userId }: IPayLoadToken): Promise<UserModel>;
    changeEmail({ newEmail, password }: UserDto.ChangeEmailInput, { _id: _userId }: IPayLoadToken): Promise<UserModel>;
}

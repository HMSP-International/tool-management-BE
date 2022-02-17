import { Model } from 'mongoose';
import { RolesService } from 'apis/v1/roles/roles.service';
import { UserModel, UserDocument } from '../../classes/user.model';
import { CreateUserInput } from '../../classes/users.dto';
import { UsersFindService } from '../find/users.find.service';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';
import { SendersService } from 'helpers/modules/senders/senders.service';
export declare class UsersCreateService {
    private userEntity;
    private readonly usersFindService;
    private readonly rolesService;
    private readonly cloudinary;
    private readonly sendersService;
    constructor(userEntity: Model<UserDocument>, usersFindService: UsersFindService, rolesService: RolesService, cloudinary: CloudinaryService, sendersService: SendersService);
    createUser(createUserInput: CreateUserInput): Promise<UserModel>;
}

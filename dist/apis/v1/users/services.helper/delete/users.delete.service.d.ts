import { Model } from 'mongoose';
import { CloudinaryService } from 'helpers/modules/cloudinary/cloudinary.service';
import { UserModel, UserDocument } from '../../classes/user.model';
import { CollaboratorsService } from 'apis/v1/collaborators/collaborators.service';
import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';
export declare class UsersDeleteService {
    private userEntity;
    private readonly cloudinary;
    private collaboratorsService;
    private paticipantsService;
    constructor(userEntity: Model<UserDocument>, cloudinary: CloudinaryService, collaboratorsService: CollaboratorsService, paticipantsService: PaticipantsService);
    deleteById(_id: string): Promise<UserModel>;
}

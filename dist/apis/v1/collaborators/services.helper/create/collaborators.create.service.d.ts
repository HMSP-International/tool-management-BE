import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CollaboratorDocument } from '../../classes/collaborator.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as CollaboratorDTO from '../../classes/collaborators.dto';
import { CollaboratorsFindService } from '../find/collaborators.find.service';
import { UsersService } from 'apis/v1/users/users.service';
export declare class CollaboratorsCreateService {
    private collaboratorEntity;
    private readonly usersService;
    private readonly collaboratorsFindService;
    private readonly jwtService;
    constructor(collaboratorEntity: Model<CollaboratorDocument>, usersService: UsersService, collaboratorsFindService: CollaboratorsFindService, jwtService: JwtService);
    inviteSpace: (createCollaboratorInput: CollaboratorDTO.InviteSpaceInput, user: IPayLoadToken) => Promise<CollaboratorDocument>;
    verifyInviteSpace: (token: CollaboratorDTO.VerifyInviteSpaceInput) => Promise<CollaboratorDocument>;
}

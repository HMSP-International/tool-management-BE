import { CollaboratorsService } from './collaborators.service';
import { Collaborator } from './classes/collaborator.entity';
import * as CollaboratorDTO from './classes/collaborators.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class CollaboratorsResolver {
    private readonly collaboratorsService;
    constructor(collaboratorsService: CollaboratorsService);
    inviteSpace(createCollaboratorInput: CollaboratorDTO.InviteSpaceInput, user: IPayLoadToken): Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    verifyInviteSpace(verifyInviteSpaceInput: CollaboratorDTO.VerifyInviteSpaceInput): Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    getInvitedSpaces(user: IPayLoadToken): Promise<import("./classes/collaborator.model").CollaboratorDocument[]>;
    findUsersBySpaceId(findUsersBySpaceId: CollaboratorDTO.FindUsersBySpaceId): Promise<import("./classes/collaborator.model").CollaboratorDocument[]>;
    deleteByUserAndSpace(user: IPayLoadToken, deleteByUserAndSpace: CollaboratorDTO.DeleteByUserAndSpaceInput): Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    _workSpaceId(collaborator: Collaborator): Promise<import("../spaces/classes/space.model").SpaceDocument>;
    _memberId(collaborator: Collaborator): Promise<import("../users/classes/user.model").UserDocument>;
}

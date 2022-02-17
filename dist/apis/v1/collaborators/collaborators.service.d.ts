import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as CollaboratorDTO from './classes/collaborators.dto';
import { CollaboratorsResolverFieldService } from './services.helper/resolveField/collaborators.resolveField.service';
import { CollaboratorsFindService, IMemberIdAndSpaceId, IMemberIdAndSpaceIdAndAdminId } from './services.helper/find/collaborators.find.service';
import { CollaboratorsCreateService } from './services.helper/create/collaborators.create.service';
import { CollaboratorsDeleteService } from './services.helper/delete/collaborators.delete.service';
export declare class CollaboratorsService {
    private collaboratorsDeleteService;
    private collaboratorsResolverFieldService;
    private collaboratorsFindService;
    private collaboratorsInviteService;
    constructor(collaboratorsDeleteService: CollaboratorsDeleteService, collaboratorsResolverFieldService: CollaboratorsResolverFieldService, collaboratorsFindService: CollaboratorsFindService, collaboratorsInviteService: CollaboratorsCreateService);
    findOneByInvitedSpace(_adminId: string, _memberId: string, _workSpaceId: string): Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    findById(_id: string): Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    findByMemberId(_memberId: string): Promise<import("./classes/collaborator.model").CollaboratorDocument[]>;
    findUsersBySpaceId(_spaceId: string): Promise<import("./classes/collaborator.model").CollaboratorDocument[]>;
    findInvitedSpaces(user: IPayLoadToken): Promise<import("./classes/collaborator.model").CollaboratorDocument[]>;
    findByMemberIdAndSpaceIdAndOwnerId: (data: IMemberIdAndSpaceIdAndAdminId) => Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    findByMemberIdAndSpaceId: (data: IMemberIdAndSpaceId) => Promise<import("./classes/collaborator.model").CollaboratorDocument[]>;
    inviteSpace: (createCollaboratorInput: CollaboratorDTO.InviteSpaceInput, user: IPayLoadToken) => Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    verifyInviteSpace: (token: CollaboratorDTO.VerifyInviteSpaceInput) => Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    deleteBySpaceId: (_workSpaceId: string) => Promise<void>;
    deleteByMemberAndSpace: (deleteByUserAndSpace: CollaboratorDTO.DeleteByUserAndSpaceInput, user: IPayLoadToken) => Promise<import("./classes/collaborator.model").CollaboratorDocument>;
    deleteByMemberId(_memberId: string): Promise<void>;
    getSpace(_id: string): Promise<import("../spaces/classes/space.model").SpaceDocument>;
    getUser(_id: string): Promise<import("../users/classes/user.model").UserDocument>;
}

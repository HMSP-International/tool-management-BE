import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { Model } from 'mongoose';
import { CollaboratorDocument } from '../../classes/collaborator.model';
export interface IMemberIdAndSpaceIdAndAdminId {
    _workSpaceId: string;
    _adminId: string;
    _memberId: string;
}
export interface IMemberIdAndSpaceId {
    _spaceIds: string[];
    _memberId: string;
}
export declare class CollaboratorsFindService {
    private collaboratorEntity;
    constructor(collaboratorEntity: Model<CollaboratorDocument>);
    findOneByInvitedSpace: (_adminId: string, _memberId: string, _workSpaceId: string) => Promise<CollaboratorDocument | null>;
    findById: (_id: string) => Promise<CollaboratorDocument | null>;
    findByMemberId: (_memberId: string) => Promise<CollaboratorDocument[]>;
    findUsersBySpaceId(_spaceId: string): Promise<CollaboratorDocument[]>;
    findInvitedSpaces(user: IPayLoadToken): Promise<CollaboratorDocument[]>;
    findByMemberIdAndSpaceIdAndOwnerId: (data: IMemberIdAndSpaceIdAndAdminId) => Promise<CollaboratorDocument | null>;
    findByMemberIdAndSpaceId: ({ _spaceIds, _memberId, }: IMemberIdAndSpaceId) => Promise<CollaboratorDocument[]>;
}

export declare class InviteSpaceInput {
    _workSpaceId: string;
    _memberId: string;
    role: string;
}
export declare class VerifyInviteSpaceInput {
    jwt: string;
}
export declare class PutInvitedSpaceInput {
    _workSpaceId: string;
    _memberIds: [string];
}
export declare class FindUsersBySpaceId {
    _spaceId: string;
}
export declare class DeleteByUserAndSpaceInput {
    _workSpaceId: string;
    _memberId: string;
}

export declare class CreatePaticipantInput {
    _memberId: string;
    _projectId: string;
    role: string;
}
export declare class ProjectsBySpacesAndMemberInput {
    _spaceIds: string[];
}
export declare class DeletePaticipantInput {
    _memberId: string;
    _projectId: string;
}
export declare class GetUsersBelongProjectInput {
    _projectId: string;
}
export declare class ChangeRoleOfMemberInput {
    _collaboratorId: string;
    _projectId: string;
    role: string;
}
export declare class GetPaticipantByProjectAndMemberInput {
    _projectId: string;
}

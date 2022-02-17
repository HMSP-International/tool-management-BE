export declare class CreateProjectInput {
    name: string;
    _spaceId: string;
}
export declare class GetProjectsInput {
    _spacesId: [string];
}
export declare class GetProjectInput {
    _projectId: string;
}
export declare class DeleteProjectInput {
    _projectId: string;
}
export declare class ChangeNameProjectInput {
    _projectId: string;
    name: string;
}
export declare class FindByMemberIdAndSpaceIdInput {
    _memberId: string;
    _spaceId: string;
}

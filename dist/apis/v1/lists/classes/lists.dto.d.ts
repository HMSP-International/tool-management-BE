export declare class CreateListInput {
    _projectId: string;
    name: string;
}
export declare class GetListsInput {
    _projectId: string;
}
export declare class PutListsFormatedInput {
    [type: string]: string;
}
export declare class DeleteListInput {
    _listId: string;
}
export declare class ChangeNameListInput {
    name: string;
    _listId: string;
}

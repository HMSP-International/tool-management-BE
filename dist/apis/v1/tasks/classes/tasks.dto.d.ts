export declare class GetTasksInput {
    _listId: string;
    _userIds: string[];
}
export declare class GetTaskByIdInput {
    _taskId: string;
}
export declare class CreateTaskInput {
    _listId: string;
    assignee: string;
    name: string;
    descriptions: string;
}
export declare class DeleteTaskInput {
    _taskIds: string[];
}
export declare class ChangeTaskNameInput {
    _taskId: string;
    name: string;
}
export declare class ChangeAssigneeInput {
    _taskId: string;
    assignee: string;
}
export declare class ChangeDescriptionsInput {
    _taskId: string;
    descriptions: string;
}
export declare class ChangeListOfTaskInput {
    _taskId: string;
    _listId: string;
}
export interface IDraggableLocation1List {
    index: number;
}
export declare class DraggableLocation1List {
    index: number;
}
export declare class ChangeListOfTaskWithDragAndDropIn1ListInput {
    destination: IDraggableLocation1List;
    _taskId: string;
}
export interface IDraggableLocationAnotherList {
    index: number;
    _listId: string;
}
export declare class DraggableLocationAnotherList {
    index: number;
    _listId: string;
}
export declare class ChangeListOfTaskWithDragAndDropInAnotherListInput {
    destination: IDraggableLocationAnotherList;
    _taskId: string;
}
export declare class GetByUserId {
    _: string;
}

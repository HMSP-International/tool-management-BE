import { Timestamp } from './timestamp';
import { DraggableLocationAnotherList } from './tasks.dto';
export declare class Task {
    _id: string;
    name: string;
    _listId: string;
    order: number;
    reporter: string;
    timestamp: Timestamp;
    _projectId: string;
    assignee: string;
    descriptions: string;
    comments: string[];
}
export declare class Draggable {
    _listId: string;
    index: number;
}
export declare class DragAndDrop {
    destination: DraggableLocationAnotherList;
    source: DraggableLocationAnotherList;
    _taskId: string;
}

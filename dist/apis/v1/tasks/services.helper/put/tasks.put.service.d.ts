import { Model } from 'mongoose';
import { TaskDocument } from '../../classes/task.model';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as TaskDto from '../../classes/tasks.dto';
import { ListsService } from 'apis/v1/lists/lists.service';
import { ProjectsService } from 'apis/v1/projects/projects.service';
import { PaticipantsService } from 'apis/v1/paticipants/paticipants.service';
import { DragAndDrop } from '../../classes/task.entity';
export declare class TasksPutService {
    private taskEntity;
    private readonly listsService;
    private readonly projectsService;
    private readonly paticipantsService;
    constructor(taskEntity: Model<TaskDocument>, listsService: ListsService, projectsService: ProjectsService, paticipantsService: PaticipantsService);
    insertAt(array: any[], index: number, ...elementsArray: any): void;
    resetOrder(_listId: string): Promise<void>;
    checkPermistion(task: TaskDocument, user: IPayLoadToken): Promise<void>;
    checkPermistion2(task: TaskDocument, user: IPayLoadToken): Promise<void>;
    changeTaskName(getTasksInput: TaskDto.ChangeTaskNameInput, user: IPayLoadToken): Promise<TaskDocument>;
    changeAssignee(changeAssigneeInput: TaskDto.ChangeAssigneeInput, user: IPayLoadToken): Promise<TaskDocument>;
    changeDescriptions(changeAssigneeInput: TaskDto.ChangeDescriptionsInput, user: IPayLoadToken): Promise<TaskDocument>;
    changeListOfTask(changeListOfTaskInput: TaskDto.ChangeListOfTaskInput, user: IPayLoadToken): Promise<TaskDocument>;
    changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropInput: TaskDto.ChangeListOfTaskWithDragAndDropIn1ListInput, user: IPayLoadToken): Promise<DragAndDrop>;
    changeListOfTaskWithDragAndDropInAnotherList(changeListOfTaskWithDragAndDropInAnotherListInput: TaskDto.ChangeListOfTaskWithDragAndDropInAnotherListInput, user: IPayLoadToken): Promise<DragAndDrop>;
}

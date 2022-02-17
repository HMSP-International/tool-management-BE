/// <reference types="mongoose" />
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import * as TaskDto from './classes/tasks.dto';
import { TasksCreateService } from './services.helper/create/tasks.create.service';
import { TasksDeleteService } from './services.helper/delete/tasks.delete.service';
import { TasksFindService } from './services.helper/find/tasks.find.service';
import { TasksPutService } from './services.helper/put/tasks.put.service';
import { TasksResolverFieldService } from './services.helper/resolvedField/tasks.resolveField.service';
export declare class TasksService {
    private readonly tasksCreateService;
    private readonly tasksDeleteService;
    private readonly tasksFindService;
    private readonly tasksPutService;
    private readonly tasksResolverFieldService;
    constructor(tasksCreateService: TasksCreateService, tasksDeleteService: TasksDeleteService, tasksFindService: TasksFindService, tasksPutService: TasksPutService, tasksResolverFieldService: TasksResolverFieldService);
    findTasksByListId(getTasksInput: TaskDto.GetTasksInput): Promise<import("./classes/task.model").TaskDocument[]>;
    findById(getTaskByIdInput: TaskDto.GetTaskByIdInput): Promise<import("./classes/task.model").TaskDocument>;
    createTask(getTasksInput: TaskDto.CreateTaskInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    deleteTasks(deleteTaskInput: TaskDto.DeleteTaskInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument[]>;
    deleteTasksByListId(_listId: string): Promise<void>;
    removeComment(_taskId: string, _commentId: string): Promise<void>;
    changeTaskName(changeTaskNameInput: TaskDto.ChangeTaskNameInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    changeAssignee(changeAssigneeInput: TaskDto.ChangeAssigneeInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    changeDescriptions(changeAssigneeInput: TaskDto.ChangeDescriptionsInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    changeListOfTask(changeListOfTaskInput: TaskDto.ChangeListOfTaskInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropInput: TaskDto.ChangeListOfTaskWithDragAndDropIn1ListInput, user: IPayLoadToken): Promise<import("./classes/task.entity").DragAndDrop>;
    changeListOfTaskWithDragAndDropInAnotherList(changeListOfTaskWithDragAndDropInAnotherListInput: TaskDto.ChangeListOfTaskWithDragAndDropInAnotherListInput, user: IPayLoadToken): Promise<import("./classes/task.entity").DragAndDrop>;
    getProject(_id: string): Promise<import("../projects/classes/project.model").ProjectDocument>;
    getUser(_id: string): Promise<import("../users/classes/user.model").UserDocument>;
    getComments(ids: string[]): Promise<(import("../comments/classes/comment.model").CommentModel & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}

/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { TasksService } from './tasks.service';
import { Task, DragAndDrop } from './classes/task.entity';
import * as TaskDto from './classes/tasks.dto';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
export declare class TasksResolver {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getTasksByListId(getTasksInput: TaskDto.GetTasksInput): Promise<import("./classes/task.model").TaskDocument[]>;
    getTaskById(getTaskByIdInput: TaskDto.GetTaskByIdInput): Promise<import("./classes/task.model").TaskDocument>;
    createTask(createTaskInput: TaskDto.CreateTaskInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    deleteTasks(deleteTaskInput: TaskDto.DeleteTaskInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument[]>;
    changeTaskName(changeTaskNameInput: TaskDto.ChangeTaskNameInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    changeAssignee(changeAssigneeInput: TaskDto.ChangeAssigneeInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    changeDescriptions(changeDescriptionsInput: TaskDto.ChangeDescriptionsInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    changeListOfTask(changeListOfTaskInput: TaskDto.ChangeListOfTaskInput, user: IPayLoadToken): Promise<import("./classes/task.model").TaskDocument>;
    changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropIn1ListInput: TaskDto.ChangeListOfTaskWithDragAndDropIn1ListInput, user: IPayLoadToken): Promise<DragAndDrop>;
    changeListOfTaskWithDragAndDropInAnotherList(changeListOfTaskWithDragAndDropInAnotherListInput: TaskDto.ChangeListOfTaskWithDragAndDropInAnotherListInput, user: IPayLoadToken): Promise<DragAndDrop>;
    _projectId(task: Task): Promise<import("../projects/classes/project.model").ProjectDocument>;
    assignee(task: Task): Promise<import("../users/classes/user.model").UserDocument>;
    reporter(task: Task): Promise<import("../users/classes/user.model").UserDocument>;
    comments(task: Task): Promise<(import("../comments/classes/comment.model").CommentModel & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}

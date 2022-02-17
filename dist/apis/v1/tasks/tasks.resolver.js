"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tasks_service_1 = require("./tasks.service");
const task_entity_1 = require("./classes/task.entity");
const TaskDto = require("./classes/tasks.dto");
const CurrentUser_decorator_1 = require("../../../common/decorator/CurrentUser.decorator");
const user_entity_1 = require("../users/classes/user.entity");
const project_entity_1 = require("../projects/classes/project.entity");
const comment_entity_1 = require("../comments/classes/comment.entity");
let TasksResolver = class TasksResolver {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    getTasksByListId(getTasksInput) {
        return this.tasksService.findTasksByListId(getTasksInput);
    }
    getTaskById(getTaskByIdInput) {
        return this.tasksService.findById(getTaskByIdInput);
    }
    createTask(createTaskInput, user) {
        return this.tasksService.createTask(createTaskInput, user);
    }
    deleteTasks(deleteTaskInput, user) {
        return this.tasksService.deleteTasks(deleteTaskInput, user);
    }
    changeTaskName(changeTaskNameInput, user) {
        return this.tasksService.changeTaskName(changeTaskNameInput, user);
    }
    changeAssignee(changeAssigneeInput, user) {
        return this.tasksService.changeAssignee(changeAssigneeInput, user);
    }
    changeDescriptions(changeDescriptionsInput, user) {
        return this.tasksService.changeDescriptions(changeDescriptionsInput, user);
    }
    changeListOfTask(changeListOfTaskInput, user) {
        return this.tasksService.changeListOfTask(changeListOfTaskInput, user);
    }
    changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropIn1ListInput, user) {
        return this.tasksService.changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropIn1ListInput, user);
    }
    changeListOfTaskWithDragAndDropInAnotherList(changeListOfTaskWithDragAndDropInAnotherListInput, user) {
        return this.tasksService.changeListOfTaskWithDragAndDropInAnotherList(changeListOfTaskWithDragAndDropInAnotherListInput, user);
    }
    _projectId(task) {
        return this.tasksService.getProject(task._projectId);
    }
    assignee(task) {
        return this.tasksService.getUser(task.assignee);
    }
    reporter(task) {
        return this.tasksService.getUser(task.reporter);
    }
    comments(task) {
        return this.tasksService.getComments(task.comments);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => [task_entity_1.Task]),
    __param(0, (0, graphql_1.Args)('getTasksInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.GetTasksInput]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "getTasksByListId", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.Task),
    __param(0, (0, graphql_1.Args)('getTaskByIdInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.GetTaskByIdInput]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "getTaskById", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.Task),
    __param(0, (0, graphql_1.Args)('createTaskInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.CreateTaskInput, Object]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "createTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => [task_entity_1.Task]),
    __param(0, (0, graphql_1.Args)('deleteTaskInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.DeleteTaskInput, Object]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "deleteTasks", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.Task),
    __param(0, (0, graphql_1.Args)('changeTaskNameInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.ChangeTaskNameInput, Object]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "changeTaskName", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.Task),
    __param(0, (0, graphql_1.Args)('changeAssigneeInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.ChangeAssigneeInput, Object]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "changeAssignee", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.Task),
    __param(0, (0, graphql_1.Args)('changeDescriptionsInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.ChangeDescriptionsInput, Object]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "changeDescriptions", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.Task),
    __param(0, (0, graphql_1.Args)('changeListOfTaskInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.ChangeListOfTaskInput, Object]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "changeListOfTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.DragAndDrop),
    __param(0, (0, graphql_1.Args)('changeListOfTaskWithDragAndDropIn1ListInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.ChangeListOfTaskWithDragAndDropIn1ListInput, Object]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "changeListOfTaskWithDragAndDropInOneList", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_entity_1.DragAndDrop),
    __param(0, (0, graphql_1.Args)('changeListOfTaskWithDragAndDropInAnotherListInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TaskDto.ChangeListOfTaskWithDragAndDropInAnotherListInput, Object]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "changeListOfTaskWithDragAndDropInAnotherList", null);
__decorate([
    (0, graphql_1.ResolveField)(() => project_entity_1.Project),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_entity_1.Task]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "_projectId", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_entity_1.Task]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "assignee", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_entity_1.Task]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "reporter", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [comment_entity_1.Comment]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_entity_1.Task]),
    __metadata("design:returntype", void 0)
], TasksResolver.prototype, "comments", null);
TasksResolver = __decorate([
    (0, graphql_1.Resolver)(() => task_entity_1.Task),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksResolver);
exports.TasksResolver = TasksResolver;
//# sourceMappingURL=tasks.resolver.js.map
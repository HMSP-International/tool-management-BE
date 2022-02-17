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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const tasks_create_service_1 = require("./services.helper/create/tasks.create.service");
const tasks_delete_service_1 = require("./services.helper/delete/tasks.delete.service");
const tasks_find_service_1 = require("./services.helper/find/tasks.find.service");
const tasks_put_service_1 = require("./services.helper/put/tasks.put.service");
const tasks_resolveField_service_1 = require("./services.helper/resolvedField/tasks.resolveField.service");
let TasksService = class TasksService {
    constructor(tasksCreateService, tasksDeleteService, tasksFindService, tasksPutService, tasksResolverFieldService) {
        this.tasksCreateService = tasksCreateService;
        this.tasksDeleteService = tasksDeleteService;
        this.tasksFindService = tasksFindService;
        this.tasksPutService = tasksPutService;
        this.tasksResolverFieldService = tasksResolverFieldService;
    }
    findTasksByListId(getTasksInput) {
        return this.tasksFindService.findTasksByListId(getTasksInput);
    }
    findById(getTaskByIdInput) {
        return this.tasksFindService.findById(getTaskByIdInput);
    }
    createTask(getTasksInput, user) {
        return this.tasksCreateService.createTask(getTasksInput, user);
    }
    deleteTasks(deleteTaskInput, user) {
        return this.tasksDeleteService.deleteTasks(deleteTaskInput, user);
    }
    deleteTasksByListId(_listId) {
        return this.tasksDeleteService.deleteTasksByListId(_listId);
    }
    removeComment(_taskId, _commentId) {
        return this.tasksDeleteService.removeComment(_taskId, _commentId);
    }
    changeTaskName(changeTaskNameInput, user) {
        return this.tasksPutService.changeTaskName(changeTaskNameInput, user);
    }
    changeAssignee(changeAssigneeInput, user) {
        return this.tasksPutService.changeAssignee(changeAssigneeInput, user);
    }
    changeDescriptions(changeAssigneeInput, user) {
        return this.tasksPutService.changeDescriptions(changeAssigneeInput, user);
    }
    changeListOfTask(changeListOfTaskInput, user) {
        return this.tasksPutService.changeListOfTask(changeListOfTaskInput, user);
    }
    changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropInput, user) {
        return this.tasksPutService.changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropInput, user);
    }
    changeListOfTaskWithDragAndDropInAnotherList(changeListOfTaskWithDragAndDropInAnotherListInput, user) {
        return this.tasksPutService.changeListOfTaskWithDragAndDropInAnotherList(changeListOfTaskWithDragAndDropInAnotherListInput, user);
    }
    getProject(_id) {
        return this.tasksResolverFieldService.getProject(_id);
    }
    getUser(_id) {
        return this.tasksResolverFieldService.getUser(_id);
    }
    getComments(ids) {
        return this.tasksResolverFieldService.getComments(ids);
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tasks_create_service_1.TasksCreateService,
        tasks_delete_service_1.TasksDeleteService,
        tasks_find_service_1.TasksFindService,
        tasks_put_service_1.TasksPutService,
        tasks_resolveField_service_1.TasksResolverFieldService])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map
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
exports.TasksPutService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_model_1 = require("../../classes/task.model");
const lists_service_1 = require("../../../lists/lists.service");
const projects_service_1 = require("../../../projects/projects.service");
const paticipants_service_1 = require("../../../paticipants/paticipants.service");
let TasksPutService = class TasksPutService {
    constructor(taskEntity, listsService, projectsService, paticipantsService) {
        this.taskEntity = taskEntity;
        this.listsService = listsService;
        this.projectsService = projectsService;
        this.paticipantsService = paticipantsService;
    }
    insertAt(array, index, ...elementsArray) {
        array.splice(index, 0, ...elementsArray);
    }
    async resetOrder(_listId) {
        const tasks = await this.taskEntity.find({ _listId });
        const arr = [];
        for (const task of tasks) {
            task.order = task.order - 1;
            arr.push(task.save());
        }
        Promise.all(arr);
    }
    async checkPermistion(task, user) {
        const list = await this.listsService.findById(task._listId);
        let count = 0;
        const project = await this.projectsService.findById(list._projectId);
        if (project.owner.toString() !== user._id)
            count++;
        const paticipant = await this.paticipantsService.findPaticipantByProjectAndMember({ _projectId: project._id }, user, true);
        if (paticipant === null || paticipant.role === 'member')
            count++;
        if (count === 2)
            throw new common_1.HttpException('FORBIDDEN', common_1.HttpStatus.FORBIDDEN);
    }
    async checkPermistion2(task, user) {
        const list = await this.listsService.findById(task._listId);
        let count = 0;
        const project = await this.projectsService.findById(list._projectId);
        if (project.owner.toString() !== user._id)
            count++;
        const paticipant = await this.paticipantsService.findPaticipantByProjectAndMember({ _projectId: project._id }, user, true);
        if (paticipant === null)
            count++;
        if (count === 2)
            throw new common_1.HttpException('FORBIDDEN', common_1.HttpStatus.FORBIDDEN);
    }
    async changeTaskName(getTasksInput, user) {
        const { _taskId, name } = getTasksInput;
        const task = await this.taskEntity.findById(_taskId);
        if (task === null) {
            throw new common_1.HttpException('Not Found taskId', common_1.HttpStatus.NOT_FOUND);
        }
        this.checkPermistion(task, user);
        return await this.taskEntity.findByIdAndUpdate(_taskId, { name }, { new: true });
    }
    async changeAssignee(changeAssigneeInput, user) {
        const { _taskId, assignee } = changeAssigneeInput;
        const task = await this.taskEntity.findById(_taskId);
        if (task === null) {
            throw new common_1.HttpException('Not Found taskId', common_1.HttpStatus.NOT_FOUND);
        }
        this.checkPermistion(task, user);
        return await this.taskEntity.findByIdAndUpdate(_taskId, { assignee }, { new: true });
    }
    async changeDescriptions(changeAssigneeInput, user) {
        const { _taskId, descriptions } = changeAssigneeInput;
        const task = await this.taskEntity.findById(_taskId);
        if (task === null) {
            throw new common_1.HttpException('Not Found taskId', common_1.HttpStatus.NOT_FOUND);
        }
        this.checkPermistion(task, user);
        return await this.taskEntity.findByIdAndUpdate(_taskId, { descriptions }, { new: true });
    }
    async changeListOfTask(changeListOfTaskInput, user) {
        const { _taskId, _listId } = changeListOfTaskInput;
        const task = await this.taskEntity.findById(_taskId);
        if (task === null) {
            throw new common_1.HttpException('Not Found taskId', common_1.HttpStatus.NOT_FOUND);
        }
        this.checkPermistion2(task, user);
        const order = await this.taskEntity.countDocuments({ _listId });
        const oldTasksOfList = await this.taskEntity.find({ _listId: task._listId, order: { $gt: task.order } });
        for (const oldTask of oldTasksOfList) {
            oldTask.order = oldTask.order - 1;
            oldTask.save();
        }
        const taskUpdated = await this.taskEntity.findByIdAndUpdate(_taskId, { _listId, order }, { new: true });
        return taskUpdated;
    }
    async changeListOfTaskWithDragAndDropInOneList(changeListOfTaskWithDragAndDropInput, user) {
        const { _taskId, destination } = changeListOfTaskWithDragAndDropInput;
        const task = await this.taskEntity.findById(_taskId);
        if (task === null) {
            throw new common_1.HttpException('Not Found taskId', common_1.HttpStatus.NOT_FOUND);
        }
        const source = {
            _listId: task._listId,
            index: task.order,
        };
        this.checkPermistion2(task, user);
        const tasksOfList = await this.taskEntity.find({ _listId: task._listId });
        const indexTask = tasksOfList.findIndex(item => item._id.toString() === _taskId);
        if (indexTask >= 0) {
            const [taskRemoved] = tasksOfList.splice(indexTask, 1);
            const min = Math.min(destination.index, source.index);
            const max = Math.max(destination.index, source.index);
            this.insertAt(tasksOfList, destination.index, taskRemoved);
            for (let i = min; i <= max; i++) {
                tasksOfList[i].order = i;
                tasksOfList[i].save();
            }
            const dragAndDrop = {
                _taskId,
                destination: Object.assign(Object.assign({}, destination), { _listId: task._listId }),
                source,
            };
            return dragAndDrop;
        }
    }
    async changeListOfTaskWithDragAndDropInAnotherList(changeListOfTaskWithDragAndDropInAnotherListInput, user) {
        const { _taskId, destination } = changeListOfTaskWithDragAndDropInAnotherListInput;
        const task = await this.taskEntity.findById(_taskId);
        if (task === null) {
            throw new common_1.HttpException('Not Found taskId', common_1.HttpStatus.NOT_FOUND);
        }
        const source = {
            _listId: task._listId,
            index: task.order,
        };
        this.checkPermistion2(task, user);
        const tasksOfOldList = await this.taskEntity.find({ _listId: task._listId });
        const tasksOfNewList = await this.taskEntity.find({ _listId: destination._listId });
        const indexTask = tasksOfOldList.findIndex(item => item._id.toString() === _taskId);
        if (indexTask >= 0) {
            const [taskRemoved] = tasksOfOldList.splice(indexTask, 1);
            taskRemoved._listId = destination._listId;
            for (let i = indexTask; i < tasksOfOldList.length; i++) {
                tasksOfOldList[i].order = i;
                tasksOfOldList[i].save();
            }
            this.insertAt(tasksOfNewList, destination.index, taskRemoved);
            for (let i = destination.index; i < tasksOfNewList.length; i++) {
                tasksOfNewList[i].order = i;
                tasksOfNewList[i].save();
            }
            const dragAndDrop = {
                _taskId,
                destination,
                source,
            };
            return dragAndDrop;
        }
    }
};
TasksPutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_model_1.TaskModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => lists_service_1.ListsService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => paticipants_service_1.PaticipantsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        lists_service_1.ListsService,
        projects_service_1.ProjectsService,
        paticipants_service_1.PaticipantsService])
], TasksPutService);
exports.TasksPutService = TasksPutService;
//# sourceMappingURL=tasks.put.service.js.map
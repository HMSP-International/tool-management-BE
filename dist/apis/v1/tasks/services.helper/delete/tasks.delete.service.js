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
exports.TasksDeleteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const comments_service_1 = require("../../../comments/comments.service");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const mongoose_2 = require("mongoose");
const task_model_1 = require("../../classes/task.model");
let TasksDeleteService = class TasksDeleteService {
    constructor(taskEntity, commentsService) {
        this.taskEntity = taskEntity;
        this.commentsService = commentsService;
    }
    async deleteTasks(deleteTaskInput, user) {
        const { _taskIds } = deleteTaskInput;
        const arrayPromise = [];
        _taskIds.forEach(_id => {
            const taskDeleted = this.taskEntity.findByIdAndDelete(_id);
            if (taskDeleted) {
                this.commentsService.deleteByTaskId(_id);
                arrayPromise.push(taskDeleted);
            }
        });
        return await Promise.all(arrayPromise);
    }
    async deleteTasksByListId(_listId) {
        const tasks = await this.taskEntity.find({ _listId });
        const tasksDeleting = [];
        for (let task of tasks) {
            const deleted = this.taskEntity.findByIdAndDelete(task._id);
            tasksDeleting.push(deleted);
        }
        const tasksDeleted = await Promise.all(tasksDeleting);
        for (let taskDeleted of tasksDeleted) {
            this.removeComment(taskDeleted._id, taskDeleted.comments);
            this.commentsService.deleteByTaskId(taskDeleted._id);
        }
    }
    async removeComment(_taskId, _commentId) {
        if (typeof _commentId === 'string') {
            const task = await this.taskEntity.findById(_taskId);
            task.comments = task.comments.filter(c => c.toString() !== _commentId);
            task.save();
        }
        else if (_commentId === null) {
            return;
        }
        else {
            const task = await this.taskEntity.findById(_taskId);
            for (let commentId of _commentId) {
                task.comments = task.comments.filter(c => c.toString() !== commentId);
            }
            task.save();
        }
    }
};
TasksDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_model_1.TaskModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => comments_service_1.CommentsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        comments_service_1.CommentsService])
], TasksDeleteService);
exports.TasksDeleteService = TasksDeleteService;
//# sourceMappingURL=tasks.delete.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksDeleteModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const comments_module_1 = require("../../../comments/comments.module");
const task_model_1 = require("../../classes/task.model");
const tasks_delete_service_1 = require("./tasks.delete.service");
let TasksDeleteModule = class TasksDeleteModule {
};
TasksDeleteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: task_model_1.TaskModel.name, schema: task_model_1.TaskSchema }]),
            (0, common_1.forwardRef)(() => comments_module_1.CommentsModule),
        ],
        providers: [tasks_delete_service_1.TasksDeleteService],
        exports: [tasks_delete_service_1.TasksDeleteService],
    })
], TasksDeleteModule);
exports.TasksDeleteModule = TasksDeleteModule;
//# sourceMappingURL=tasks.delete.module.js.map
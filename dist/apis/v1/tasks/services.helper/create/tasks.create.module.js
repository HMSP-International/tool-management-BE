"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksCreateModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const task_model_1 = require("../../classes/task.model");
const tasks_create_service_1 = require("./tasks.create.service");
const lists_module_1 = require("../../../lists/lists.module");
const projects_module_1 = require("../../../projects/projects.module");
const paticipants_module_1 = require("../../../paticipants/paticipants.module");
let TasksCreateModule = class TasksCreateModule {
};
TasksCreateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: task_model_1.TaskModel.name, schema: task_model_1.TaskSchema }]),
            (0, common_1.forwardRef)(() => lists_module_1.ListsModule),
            (0, common_1.forwardRef)(() => projects_module_1.ProjectsModule),
            (0, common_1.forwardRef)(() => paticipants_module_1.PaticipantsModule),
        ],
        providers: [tasks_create_service_1.TasksCreateService],
        exports: [tasks_create_service_1.TasksCreateService],
    })
], TasksCreateModule);
exports.TasksCreateModule = TasksCreateModule;
//# sourceMappingURL=tasks.create.module.js.map
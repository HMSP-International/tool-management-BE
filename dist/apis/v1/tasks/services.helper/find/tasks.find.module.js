"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksFindModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const paticipants_module_1 = require("../../../paticipants/paticipants.module");
const task_model_1 = require("../../classes/task.model");
const tasks_find_service_1 = require("./tasks.find.service");
let TasksFindModule = class TasksFindModule {
};
TasksFindModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: task_model_1.TaskModel.name, schema: task_model_1.TaskSchema }]),
            (0, common_1.forwardRef)(() => paticipants_module_1.PaticipantsModule),
        ],
        providers: [tasks_find_service_1.TasksFindService],
        exports: [tasks_find_service_1.TasksFindService],
    })
], TasksFindModule);
exports.TasksFindModule = TasksFindModule;
//# sourceMappingURL=tasks.find.module.js.map
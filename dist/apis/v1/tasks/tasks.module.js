"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const tasks_resolver_1 = require("./tasks.resolver");
const tasks_create_module_1 = require("./services.helper/create/tasks.create.module");
const tasks_delete_module_1 = require("./services.helper/delete/tasks.delete.module");
const tasks_find_module_1 = require("./services.helper/find/tasks.find.module");
const tasks_put_module_1 = require("./services.helper/put/tasks.put.module");
const tasks_resolveField_module_1 = require("./services.helper/resolvedField/tasks.resolveField.module");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [tasks_create_module_1.TasksCreateModule, tasks_delete_module_1.TasksDeleteModule, tasks_find_module_1.TasksFindModule, tasks_put_module_1.TasksPutModule, tasks_resolveField_module_1.TasksResolverFieldModule],
        providers: [tasks_resolver_1.TasksResolver, tasks_service_1.TasksService],
        exports: [tasks_service_1.TasksService],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map
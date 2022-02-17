"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsDeleteModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const list_model_1 = require("../../classes/list.model");
const lists_delete_service_1 = require("./lists.delete.service");
const lists_put_module_1 = require("../put/lists.put.module");
const tasks_module_1 = require("../../../tasks/tasks.module");
const projects_module_1 = require("../../../projects/projects.module");
let ListsDeleteModule = class ListsDeleteModule {
};
ListsDeleteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: list_model_1.ListModel.name, schema: list_model_1.ListSchema }]),
            (0, common_1.forwardRef)(() => tasks_module_1.TasksModule),
            lists_put_module_1.ListsPutModule,
            (0, common_1.forwardRef)(() => projects_module_1.ProjectsModule),
        ],
        providers: [lists_delete_service_1.ListsDeleteService],
        exports: [lists_delete_service_1.ListsDeleteService],
    })
], ListsDeleteModule);
exports.ListsDeleteModule = ListsDeleteModule;
//# sourceMappingURL=lists.delete.module.js.map
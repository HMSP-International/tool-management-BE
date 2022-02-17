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
exports.ListsDeleteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const list_model_1 = require("../../classes/list.model");
const tasks_service_1 = require("../../../tasks/tasks.service");
const lists_put_service_1 = require("../put/lists.put.service");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const projects_service_1 = require("../../../projects/projects.service");
let ListsDeleteService = class ListsDeleteService {
    constructor(listEntity, tasksService, listsPutService, projectsService) {
        this.listEntity = listEntity;
        this.tasksService = tasksService;
        this.listsPutService = listsPutService;
        this.projectsService = projectsService;
    }
    async deleteListById(_listId, user) {
        const list = await this.listEntity.findById(_listId);
        if (list === null) {
            throw new common_1.HttpException('Not Found _listId', common_1.HttpStatus.BAD_REQUEST);
        }
        const project = await this.projectsService.findById(list._projectId);
        if (project.owner.toString() !== user._id) {
            throw new common_1.HttpException('FORBIDDEN', common_1.HttpStatus.FORBIDDEN);
        }
        this.tasksService.deleteTasksByListId(_listId);
        const listDeleted = await this.listEntity.findByIdAndDelete(_listId);
        this.listsPutService.resetListOrder(listDeleted._projectId);
        return listDeleted;
    }
    async deleteByProjectId(_projectId, user) {
        const lists = await this.listEntity.find({ _projectId });
        for (let list of lists) {
            this.deleteListById(list._id, user);
        }
        this.listsPutService.resetListOrder(_projectId);
    }
};
ListsDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(list_model_1.ListModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => tasks_service_1.TasksService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        tasks_service_1.TasksService,
        lists_put_service_1.ListsPutService,
        projects_service_1.ProjectsService])
], ListsDeleteService);
exports.ListsDeleteService = ListsDeleteService;
//# sourceMappingURL=lists.delete.service.js.map
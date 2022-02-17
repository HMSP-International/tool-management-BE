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
exports.TasksCreateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_model_1 = require("../../classes/task.model");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const lists_service_1 = require("../../../lists/lists.service");
const projects_service_1 = require("../../../projects/projects.service");
const paticipants_service_1 = require("../../../paticipants/paticipants.service");
let TasksCreateService = class TasksCreateService {
    constructor(taskEntity, listsService, projectsService, paticipantsService) {
        this.taskEntity = taskEntity;
        this.listsService = listsService;
        this.projectsService = projectsService;
        this.paticipantsService = paticipantsService;
    }
    async createTask(getTasksInput, user) {
        const { _listId, name, assignee, descriptions } = getTasksInput;
        const list = await this.listsService.findById(_listId);
        let count = 0;
        const project = await this.projectsService.findById(list._projectId);
        if (project.owner.toString() !== user._id)
            count++;
        const paticipant = await this.paticipantsService.findPaticipantByProjectAndMember({ _projectId: project._id }, user, true);
        if (!paticipant || (paticipant && paticipant.role === 'member'))
            count++;
        if (count === 2)
            throw new common_1.HttpException('FORBIDDEN', common_1.HttpStatus.FORBIDDEN);
        const order = await this.taskEntity.countDocuments({ _listId });
        const newTask = new this.taskEntity({
            _listId,
            name,
            assignee,
            _projectId: project._id,
            reporter: user._id,
            order,
            descriptions,
        });
        return await newTask.save();
    }
};
TasksCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_model_1.TaskModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => lists_service_1.ListsService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => paticipants_service_1.PaticipantsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        lists_service_1.ListsService,
        projects_service_1.ProjectsService,
        paticipants_service_1.PaticipantsService])
], TasksCreateService);
exports.TasksCreateService = TasksCreateService;
//# sourceMappingURL=tasks.create.service.js.map
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
exports.ProjectsDeleteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const project_model_1 = require("../../classes/project.model");
const lists_service_1 = require("../../../lists/lists.service");
const paticipants_service_1 = require("../../../paticipants/paticipants.service");
let ProjectsDeleteService = class ProjectsDeleteService {
    constructor(projectEntity, listsService, paticipantsService) {
        this.projectEntity = projectEntity;
        this.listsService = listsService;
        this.paticipantsService = paticipantsService;
    }
    async deleteProjectById(_projectId, user) {
        const project = await this.projectEntity.findById(_projectId);
        if (project === null) {
            throw new common_1.HttpException('Not Found _projectId', common_1.HttpStatus.NOT_FOUND);
        }
        if (project.owner.toString() !== user._id) {
            throw new common_1.HttpException('FORBIDDEN', common_1.HttpStatus.FORBIDDEN);
        }
        await this.listsService.deleteByProjectId(_projectId, user);
        await this.paticipantsService.deleteByProjectId(_projectId);
        const projectDeleted = await this.projectEntity.findByIdAndDelete(_projectId);
        return projectDeleted;
    }
};
ProjectsDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_model_1.ProjectModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => lists_service_1.ListsService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => paticipants_service_1.PaticipantsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        lists_service_1.ListsService,
        paticipants_service_1.PaticipantsService])
], ProjectsDeleteService);
exports.ProjectsDeleteService = ProjectsDeleteService;
//# sourceMappingURL=projects.delete.service.js.map
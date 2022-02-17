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
exports.ProjectsFindService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const project_model_1 = require("../../classes/project.model");
const paticipants_service_1 = require("../../../paticipants/paticipants.service");
let ProjectsFindService = class ProjectsFindService {
    constructor(projectEntity, paticipantsService) {
        this.projectEntity = projectEntity;
        this.paticipantsService = paticipantsService;
    }
    async findAll(_spacesId, _userId) {
        const projects = await this.projectEntity.find({ _spaceId: _spacesId, owner: _userId }).sort('_spaceId order');
        return projects;
    }
    async findById(_id) {
        const project = await this.projectEntity.findById(_id);
        if (project === null) {
            throw new common_1.HttpException('Not Found _projectId', common_1.HttpStatus.BAD_REQUEST);
        }
        return project;
    }
    async findByListId(_ids) {
        const projects = await this.projectEntity.find({ _id: _ids });
        return projects;
    }
    async findAllByCollaborator(getProjectsInput) {
        const projects = await this.projectEntity.find({ _spaceId: getProjectsInput._spacesId }).sort('_spaceId order');
        return projects;
    }
    async findByMemberId(getProjectsInput) {
        const projects = await this.projectEntity.find({ _spaceId: getProjectsInput._spacesId }).sort('_spaceId order');
        return projects;
    }
    async findByMemberIdAndSpaceId({ _memberId, _spaceId, }) {
        const paticipants = await this.paticipantsService.getProjectsByMemberId(_memberId);
        const projects = [];
        if (_spaceId.length === 24) {
            for (let i = 0; i < paticipants.length; i++) {
                const project = await this.projectEntity.findOne({
                    _id: paticipants[i]._projectId.toString(),
                    _spaceId,
                });
                if (project !== null) {
                    projects.push(project);
                }
            }
        }
        else {
            for (let i = 0; i < paticipants.length; i++) {
                const project = await this.projectEntity.findOne({
                    _id: paticipants[i]._projectId.toString(),
                });
                if (project !== null) {
                    projects.push(project);
                }
            }
        }
        return projects;
    }
};
ProjectsFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_model_1.ProjectModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => paticipants_service_1.PaticipantsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        paticipants_service_1.PaticipantsService])
], ProjectsFindService);
exports.ProjectsFindService = ProjectsFindService;
//# sourceMappingURL=projects.find.service.js.map
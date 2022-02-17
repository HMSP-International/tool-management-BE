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
exports.PaticipantsDeleteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const paticipant_model_1 = require("../../classes/paticipant.model");
const collaborators_service_1 = require("../../../collaborators/collaborators.service");
const projects_service_1 = require("../../../projects/projects.service");
let PaticipantsDeleteService = class PaticipantsDeleteService {
    constructor(paticipantEntity, collaboratorsService, projectsService) {
        this.paticipantEntity = paticipantEntity;
        this.collaboratorsService = collaboratorsService;
        this.projectsService = projectsService;
    }
    async deleteByMemberAndProject(data, user) {
        const { _memberId, _projectId } = data;
        const project = await this.projectsService.findById(_projectId);
        const collaborator = await this.collaboratorsService.findByMemberIdAndSpaceIdAndOwnerId({
            _workSpaceId: project._spaceId,
            _memberId,
            _adminId: user._id,
        });
        if (collaborator === null) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        const paticipant = await this.paticipantEntity.findOne({ _collaboratorId: collaborator._id, _projectId });
        if (paticipant === null) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.paticipantEntity.findByIdAndDelete(paticipant._id);
    }
    async deleteByProjectId(_projectId) {
        await this.paticipantEntity.deleteMany({ _projectId });
    }
    async deleteByCollboratorId(_collaboratorsId) {
        const deleted = await this.paticipantEntity.deleteMany({ _collaboratorId: _collaboratorsId });
        console.log('delete paticipant when delete user: ', deleted);
    }
};
PaticipantsDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(paticipant_model_1.PaticipantModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => collaborators_service_1.CollaboratorsService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        collaborators_service_1.CollaboratorsService,
        projects_service_1.ProjectsService])
], PaticipantsDeleteService);
exports.PaticipantsDeleteService = PaticipantsDeleteService;
//# sourceMappingURL=paticipants.delete.service.js.map
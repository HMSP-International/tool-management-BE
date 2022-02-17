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
exports.PaticipantsFindService = void 0;
const common_1 = require("@nestjs/common");
const collaborators_service_1 = require("../../../collaborators/collaborators.service");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const projects_service_1 = require("../../../projects/projects.service");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const paticipant_model_1 = require("../../classes/paticipant.model");
let PaticipantsFindService = class PaticipantsFindService {
    constructor(paticipantEntity, collaboratorsService, projectsService) {
        this.paticipantEntity = paticipantEntity;
        this.collaboratorsService = collaboratorsService;
        this.projectsService = projectsService;
    }
    async getProjectsBySpacesAndMember({ _spaceIds }, _memberId) {
        const collaborators = await this.collaboratorsService.findByMemberIdAndSpaceId({
            _spaceIds,
            _memberId,
        });
        const paticipants = [];
        for (let coll of collaborators) {
            const paticipant = await this.paticipantEntity.find({ _collaboratorId: coll._id });
            paticipants.push(...paticipant);
        }
        const projectIds = paticipants.filter(p => p !== null).map(p => p._projectId);
        const projectList = await this.projectsService.findByListId(projectIds);
        return projectList;
    }
    async getUsersBelongProject({ _projectId, }) {
        return await this.paticipantEntity.find({ _projectId });
    }
    async getProjectByMemberId(_memberId) {
        return await this.paticipantEntity.find({ _memberId });
    }
    async findPaticipantByProjectAndMember({ _projectId }, user, returnNull) {
        const paticipant = await this.paticipantEntity.findOne({ _projectId, _memberId: user._id });
        if (paticipant === null && !returnNull) {
            throw new common_1.HttpException('Not Found findPaticipantByProjectAndMember', common_1.HttpStatus.NOT_FOUND);
        }
        return paticipant;
    }
};
PaticipantsFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(paticipant_model_1.PaticipantModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => collaborators_service_1.CollaboratorsService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        collaborators_service_1.CollaboratorsService,
        projects_service_1.ProjectsService])
], PaticipantsFindService);
exports.PaticipantsFindService = PaticipantsFindService;
//# sourceMappingURL=paticipants.find.service.js.map
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
exports.PaticipantsCreateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const projects_service_1 = require("../../../projects/projects.service");
const mongoose_2 = require("mongoose");
const collaborators_service_1 = require("../../../collaborators/collaborators.service");
const paticipant_model_1 = require("../../classes/paticipant.model");
const users_service_1 = require("../../../users/users.service");
let PaticipantsCreateService = class PaticipantsCreateService {
    constructor(paticipantEntity, projectsService, collaboratorsService, usersService) {
        this.paticipantEntity = paticipantEntity;
        this.projectsService = projectsService;
        this.collaboratorsService = collaboratorsService;
        this.usersService = usersService;
    }
    async create(data, user) {
        const { _memberId, _projectId, role } = data;
        const { _id: _adminId } = user;
        const project = await this.projectsService.findById(_projectId);
        const _workSpaceId = project._spaceId;
        let collaborator = await this.collaboratorsService.findByMemberIdAndSpaceIdAndOwnerId({
            _memberId,
            _adminId,
            _workSpaceId,
        });
        if (collaborator === null) {
            collaborator = await this.collaboratorsService.inviteSpace({ _workSpaceId, _memberId, role }, user);
        }
        const paticipant = await this.paticipantEntity.findOne({
            _projectId,
            role,
            _collaboratorId: collaborator._id,
            _memberId,
        });
        if (paticipant === null) {
            await new this.paticipantEntity({ _projectId, role, _collaboratorId: collaborator._id, _memberId }).save();
        }
        return this.usersService.findById(_adminId);
    }
};
PaticipantsCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(paticipant_model_1.PaticipantModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => collaborators_service_1.CollaboratorsService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        projects_service_1.ProjectsService,
        collaborators_service_1.CollaboratorsService,
        users_service_1.UsersService])
], PaticipantsCreateService);
exports.PaticipantsCreateService = PaticipantsCreateService;
//# sourceMappingURL=paticipants.create.service.js.map
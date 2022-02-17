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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorsService = void 0;
const common_1 = require("@nestjs/common");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const collaborators_resolveField_service_1 = require("./services.helper/resolveField/collaborators.resolveField.service");
const collaborators_find_service_1 = require("./services.helper/find/collaborators.find.service");
const collaborators_create_service_1 = require("./services.helper/create/collaborators.create.service");
const collaborators_delete_service_1 = require("./services.helper/delete/collaborators.delete.service");
let CollaboratorsService = class CollaboratorsService {
    constructor(collaboratorsDeleteService, collaboratorsResolverFieldService, collaboratorsFindService, collaboratorsInviteService) {
        this.collaboratorsDeleteService = collaboratorsDeleteService;
        this.collaboratorsResolverFieldService = collaboratorsResolverFieldService;
        this.collaboratorsFindService = collaboratorsFindService;
        this.collaboratorsInviteService = collaboratorsInviteService;
        this.findByMemberIdAndSpaceIdAndOwnerId = async (data) => {
            return this.collaboratorsFindService.findByMemberIdAndSpaceIdAndOwnerId(data);
        };
        this.findByMemberIdAndSpaceId = async (data) => {
            return this.collaboratorsFindService.findByMemberIdAndSpaceId(data);
        };
        this.inviteSpace = async (createCollaboratorInput, user) => {
            return this.collaboratorsInviteService.inviteSpace(createCollaboratorInput, user);
        };
        this.verifyInviteSpace = (token) => {
            return this.collaboratorsInviteService.verifyInviteSpace(token);
        };
        this.deleteBySpaceId = (_workSpaceId) => {
            return this.collaboratorsDeleteService.deleteBySpaceId(_workSpaceId);
        };
        this.deleteByMemberAndSpace = (deleteByUserAndSpace, user) => {
            return this.collaboratorsDeleteService.deleteByMemberAndSpace(deleteByUserAndSpace, user);
        };
    }
    async findOneByInvitedSpace(_adminId, _memberId, _workSpaceId) {
        return this.collaboratorsFindService.findOneByInvitedSpace(_adminId, _memberId, _workSpaceId);
    }
    async findById(_id) {
        return this.collaboratorsFindService.findById(_id);
    }
    async findByMemberId(_memberId) {
        return this.collaboratorsFindService.findByMemberId(_memberId);
    }
    findUsersBySpaceId(_spaceId) {
        return this.collaboratorsFindService.findUsersBySpaceId(_spaceId);
    }
    findInvitedSpaces(user) {
        return this.collaboratorsFindService.findInvitedSpaces(user);
    }
    async deleteByMemberId(_memberId) {
        return this.collaboratorsDeleteService.deleteByMemberId(_memberId);
    }
    getSpace(_id) {
        return this.collaboratorsResolverFieldService.getSpace(_id);
    }
    getUser(_id) {
        return this.collaboratorsResolverFieldService.getUser(_id);
    }
};
CollaboratorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [collaborators_delete_service_1.CollaboratorsDeleteService,
        collaborators_resolveField_service_1.CollaboratorsResolverFieldService,
        collaborators_find_service_1.CollaboratorsFindService,
        collaborators_create_service_1.CollaboratorsCreateService])
], CollaboratorsService);
exports.CollaboratorsService = CollaboratorsService;
//# sourceMappingURL=collaborators.service.js.map
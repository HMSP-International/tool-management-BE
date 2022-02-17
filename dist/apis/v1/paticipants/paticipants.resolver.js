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
exports.PaticipantsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const paticipant_entity_1 = require("./classes/paticipant.entity");
const paticipants_service_1 = require("./paticipants.service");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const CurrentUser_decorator_1 = require("../../../common/decorator/CurrentUser.decorator");
const PaticipantDTO = require("./classes/paticipants.dto");
const collaborator_entity_1 = require("../collaborators/classes/collaborator.entity");
const project_entity_1 = require("../projects/classes/project.entity");
const user_entity_1 = require("../users/classes/user.entity");
let PaticipantsResolver = class PaticipantsResolver {
    constructor(paticipantsService) {
        this.paticipantsService = paticipantsService;
    }
    createPaticipant(user, createPaticipantInput) {
        return this.paticipantsService.createPaticipant(createPaticipantInput, user);
    }
    deletePaticipant(user, deletePaticipantInput) {
        return this.paticipantsService.deleteByMemberAndProject(deletePaticipantInput, user);
    }
    getProjectsBySpacesAndMember(user, projectsBySpacesAndMemberInput) {
        return this.paticipantsService.getProjectsBySpacesAndMember(projectsBySpacesAndMemberInput, user._id);
    }
    getUsersBelongProject(getUsersBelongProjectInput) {
        return this.paticipantsService.getUsersBelongProject(getUsersBelongProjectInput);
    }
    findPaticipantByProjectAndMember(getPaticipantByProjectAndMemberInput, user) {
        return this.paticipantsService.findPaticipantByProjectAndMember(getPaticipantByProjectAndMemberInput, user, false);
    }
    changeRoleOfMemberOnPaticipant(user, changeRoleOfMemberInput) {
        return this.paticipantsService.changeRoleOfMemberOnPaticipant(changeRoleOfMemberInput, user);
    }
    _collaboratorId(paticipant) {
        return this.paticipantsService.getCollaborator(paticipant._collaboratorId);
    }
    _projectId(paticipant) {
        return this.paticipantsService.getProject(paticipant._projectId);
    }
    _memberId(paticipant) {
        return this.paticipantsService.getUser(paticipant._memberId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createPaticipantInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, PaticipantDTO.CreatePaticipantInput]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "createPaticipant", null);
__decorate([
    (0, graphql_1.Mutation)(() => paticipant_entity_1.Paticipant),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('deletePaticipantInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, PaticipantDTO.DeletePaticipantInput]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "deletePaticipant", null);
__decorate([
    (0, graphql_1.Mutation)(() => [project_entity_1.Project]),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('projectsBySpacesAndMemberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, PaticipantDTO.ProjectsBySpacesAndMemberInput]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "getProjectsBySpacesAndMember", null);
__decorate([
    (0, graphql_1.Mutation)(() => [paticipant_entity_1.Paticipant]),
    __param(0, (0, graphql_1.Args)('getUsersBelongProjectInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PaticipantDTO.GetUsersBelongProjectInput]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "getUsersBelongProject", null);
__decorate([
    (0, graphql_1.Mutation)(() => paticipant_entity_1.Paticipant),
    __param(0, (0, graphql_1.Args)('getPaticipantByProjectAndMemberInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PaticipantDTO.GetPaticipantByProjectAndMemberInput, Object]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "findPaticipantByProjectAndMember", null);
__decorate([
    (0, graphql_1.Mutation)(() => paticipant_entity_1.Paticipant),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('changeRoleOfMemberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, PaticipantDTO.ChangeRoleOfMemberInput]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "changeRoleOfMemberOnPaticipant", null);
__decorate([
    (0, graphql_1.ResolveField)(() => collaborator_entity_1.Collaborator),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paticipant_entity_1.Paticipant]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "_collaboratorId", null);
__decorate([
    (0, graphql_1.ResolveField)(() => project_entity_1.Project),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paticipant_entity_1.Paticipant]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "_projectId", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paticipant_entity_1.Paticipant]),
    __metadata("design:returntype", void 0)
], PaticipantsResolver.prototype, "_memberId", null);
PaticipantsResolver = __decorate([
    (0, graphql_1.Resolver)(() => paticipant_entity_1.Paticipant),
    __metadata("design:paramtypes", [paticipants_service_1.PaticipantsService])
], PaticipantsResolver);
exports.PaticipantsResolver = PaticipantsResolver;
//# sourceMappingURL=paticipants.resolver.js.map
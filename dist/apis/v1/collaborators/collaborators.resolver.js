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
exports.CollaboratorsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const collaborators_service_1 = require("./collaborators.service");
const collaborator_entity_1 = require("./classes/collaborator.entity");
const CollaboratorDTO = require("./classes/collaborators.dto");
const CurrentUser_decorator_1 = require("../../../common/decorator/CurrentUser.decorator");
const space_entity_1 = require("../spaces/classes/space.entity");
const user_entity_1 = require("../users/classes/user.entity");
let CollaboratorsResolver = class CollaboratorsResolver {
    constructor(collaboratorsService) {
        this.collaboratorsService = collaboratorsService;
    }
    inviteSpace(createCollaboratorInput, user) {
        return this.collaboratorsService.inviteSpace(createCollaboratorInput, user);
    }
    verifyInviteSpace(verifyInviteSpaceInput) {
        return this.collaboratorsService.verifyInviteSpace(verifyInviteSpaceInput);
    }
    getInvitedSpaces(user) {
        return this.collaboratorsService.findInvitedSpaces(user);
    }
    findUsersBySpaceId(findUsersBySpaceId) {
        return this.collaboratorsService.findUsersBySpaceId(findUsersBySpaceId._spaceId);
    }
    deleteByUserAndSpace(user, deleteByUserAndSpace) {
        return this.collaboratorsService.deleteByMemberAndSpace(deleteByUserAndSpace, user);
    }
    _workSpaceId(collaborator) {
        return this.collaboratorsService.getSpace(collaborator._workSpaceId);
    }
    _memberId(collaborator) {
        return this.collaboratorsService.getUser(collaborator._memberId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => collaborator_entity_1.Collaborator),
    __param(0, (0, graphql_1.Args)('inviteSpaceInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CollaboratorDTO.InviteSpaceInput, Object]),
    __metadata("design:returntype", void 0)
], CollaboratorsResolver.prototype, "inviteSpace", null);
__decorate([
    (0, graphql_1.Mutation)(() => collaborator_entity_1.Collaborator),
    __param(0, (0, graphql_1.Args)('verifyInviteSpaceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CollaboratorDTO.VerifyInviteSpaceInput]),
    __metadata("design:returntype", void 0)
], CollaboratorsResolver.prototype, "verifyInviteSpace", null);
__decorate([
    (0, graphql_1.Query)(() => [collaborator_entity_1.Collaborator]),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CollaboratorsResolver.prototype, "getInvitedSpaces", null);
__decorate([
    (0, graphql_1.Mutation)(() => [collaborator_entity_1.Collaborator]),
    __param(0, (0, graphql_1.Args)('findUsersBySpaceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CollaboratorDTO.FindUsersBySpaceId]),
    __metadata("design:returntype", void 0)
], CollaboratorsResolver.prototype, "findUsersBySpaceId", null);
__decorate([
    (0, graphql_1.Mutation)(() => collaborator_entity_1.Collaborator),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('deleteByUserAndSpaceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CollaboratorDTO.DeleteByUserAndSpaceInput]),
    __metadata("design:returntype", void 0)
], CollaboratorsResolver.prototype, "deleteByUserAndSpace", null);
__decorate([
    (0, graphql_1.ResolveField)(() => space_entity_1.Space),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [collaborator_entity_1.Collaborator]),
    __metadata("design:returntype", void 0)
], CollaboratorsResolver.prototype, "_workSpaceId", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [collaborator_entity_1.Collaborator]),
    __metadata("design:returntype", void 0)
], CollaboratorsResolver.prototype, "_memberId", null);
CollaboratorsResolver = __decorate([
    (0, graphql_1.Resolver)(() => collaborator_entity_1.Collaborator),
    __metadata("design:paramtypes", [collaborators_service_1.CollaboratorsService])
], CollaboratorsResolver);
exports.CollaboratorsResolver = CollaboratorsResolver;
//# sourceMappingURL=collaborators.resolver.js.map
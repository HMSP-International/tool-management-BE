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
exports.SpacesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const spaces_service_1 = require("./spaces.service");
const space_entity_1 = require("./classes/space.entity");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const currentUser_decorator_1 = require("../../../common/decorator/currentUser.decorator");
const SpaceDTO = require("./classes/spaces.dto");
let SpacesResolver = class SpacesResolver {
    constructor(spacesService) {
        this.spacesService = spacesService;
    }
    getSpaces(user) {
        return this.spacesService.findAll(user);
    }
    getSpacesByMemberId(user, findByMemberId) {
        return this.spacesService.findByMemberId(findByMemberId, user);
    }
    createSpace(user, createSpaceInput) {
        return this.spacesService.create(createSpaceInput.name, user);
    }
    changeNameSpace(changeNameSpaceInput) {
        return this.spacesService.changeName(changeNameSpaceInput);
    }
    deleteSpaceById(deleteSpaceInput, user) {
        return this.spacesService.deleteSpaceById(deleteSpaceInput._spaceId, user._id);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [space_entity_1.Space]),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpacesResolver.prototype, "getSpaces", null);
__decorate([
    (0, graphql_1.Mutation)(() => [space_entity_1.Space]),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('findByMemberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SpaceDTO.FindByMemberId]),
    __metadata("design:returntype", void 0)
], SpacesResolver.prototype, "getSpacesByMemberId", null);
__decorate([
    (0, graphql_1.Mutation)(() => [space_entity_1.Space]),
    __param(0, (0, currentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createSpaceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, SpaceDTO.CreateSpaceInput]),
    __metadata("design:returntype", void 0)
], SpacesResolver.prototype, "createSpace", null);
__decorate([
    (0, graphql_1.Mutation)(() => space_entity_1.Space),
    __param(0, (0, graphql_1.Args)('changeNameSpaceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SpaceDTO.ChangeNameSpaceInput]),
    __metadata("design:returntype", void 0)
], SpacesResolver.prototype, "changeNameSpace", null);
__decorate([
    (0, graphql_1.Mutation)(() => space_entity_1.Space),
    __param(0, (0, graphql_1.Args)('deleteSpaceInput')),
    __param(1, (0, currentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SpaceDTO.DeleteSpaceInput, Object]),
    __metadata("design:returntype", void 0)
], SpacesResolver.prototype, "deleteSpaceById", null);
SpacesResolver = __decorate([
    (0, graphql_1.Resolver)(() => space_entity_1.Space),
    __metadata("design:paramtypes", [spaces_service_1.SpacesService])
], SpacesResolver);
exports.SpacesResolver = SpacesResolver;
//# sourceMappingURL=spaces.resolver.js.map
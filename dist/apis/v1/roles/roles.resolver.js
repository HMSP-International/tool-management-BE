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
exports.RolesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const permissions_decorator_1 = require("../../../common/decorator/permissions.decorator");
const role_entity_1 = require("./classes/role.entity");
const roles_service_1 = require("./roles.service");
let RolesResolver = class RolesResolver {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    async getRoles() {
        return this.rolesService.findAll();
    }
};
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'getRoles' }),
    (0, graphql_1.Query)(() => [role_entity_1.Role]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesResolver.prototype, "getRoles", null);
RolesResolver = __decorate([
    (0, graphql_1.Resolver)(() => role_entity_1.Role),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesResolver);
exports.RolesResolver = RolesResolver;
//# sourceMappingURL=roles.resolver.js.map
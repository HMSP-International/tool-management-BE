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
exports.PermissionssGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
const permissions_service_1 = require("../../apis/v1/permissions/permissions.service");
const permissions_decorator_1 = require("../decorator/permissions.decorator");
let PermissionssGuard = class PermissionssGuard {
    constructor(reflector, permissionsService) {
        this.reflector = reflector;
        this.permissionsService = permissionsService;
    }
    async canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const { user } = ctx.getContext().req;
        if (!user)
            throw new common_1.HttpException('Cant find token in authorization headers', common_1.HttpStatus.UNAUTHORIZED);
        const permissions = this.reflector.getAllAndOverride(permissions_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        const isPermit = await this.permissionsService.findByRoleIdAndResolverName(user._roleId.name, permissions.resolverName);
        if (isPermit === false) {
            throw new common_1.HttpException('Not Permission', common_1.HttpStatus.BAD_REQUEST);
        }
        return isPermit;
    }
};
PermissionssGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, permissions_service_1.PermissionsService])
], PermissionssGuard);
exports.PermissionssGuard = PermissionssGuard;
//# sourceMappingURL=permissions.guard.js.map
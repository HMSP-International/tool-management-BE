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
exports.PermissionsFindService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const roles_service_1 = require("../../../roles/roles.service");
const permission_model_1 = require("../../classes/permission.model");
let PermissionsFindService = class PermissionsFindService {
    constructor(permissionEntity, rolesService) {
        this.permissionEntity = permissionEntity;
        this.rolesService = rolesService;
    }
    async findByRoleIdAndResolverName(roleName, resolverName) {
        const role = await this.rolesService.findByName(roleName);
        if (role === null)
            return false;
        if (role.name === 'SUPER_ADMIN')
            return true;
        const isPermit = await this.permissionEntity.findOne({ _roleId: role._id, resolverName });
        return isPermit ? true : false;
    }
};
PermissionsFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(permission_model_1.PermissionModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        roles_service_1.RolesService])
], PermissionsFindService);
exports.PermissionsFindService = PermissionsFindService;
//# sourceMappingURL=permissions.find.service.js.map
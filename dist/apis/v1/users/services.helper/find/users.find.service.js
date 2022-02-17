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
exports.UsersFindService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_model_1 = require("../../../roles/classes/role.model");
const roles_service_1 = require("../../../roles/roles.service");
const user_model_1 = require("../../classes/user.model");
let UsersFindService = class UsersFindService {
    constructor(userEntity, rolesService) {
        this.userEntity = userEntity;
        this.rolesService = rolesService;
    }
    async findAll() {
        const users = await this.userEntity.find().select('-password');
        if (users.length <= 0)
            throw new common_1.HttpException('Not Found Any User', common_1.HttpStatus.NO_CONTENT);
        return users;
    }
    async findById(_id, getPassword = false) {
        if (getPassword === true) {
            return await this.userEntity.findById(_id);
        }
        else {
            return await this.userEntity.findById(_id).select('-password');
        }
    }
    async findByEmail(email) {
        const user = await this.userEntity.findOne({ email }).populate('_roleId');
        return user;
    }
    async findRoleById(_id) {
        const role = await this.rolesService.findById(_id);
        if (!role)
            throw new common_1.HttpException('Not Found role', common_1.HttpStatus.NO_CONTENT);
        return role;
    }
};
UsersFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.UserModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        roles_service_1.RolesService])
], UsersFindService);
exports.UsersFindService = UsersFindService;
//# sourceMappingURL=users.find.service.js.map
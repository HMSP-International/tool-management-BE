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
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_service_1 = require("./users.service");
const user_entity_1 = require("./classes/user.entity");
const UserDto = require("./classes/users.dto");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const CurrentUser_decorator_1 = require("../../../common/decorator/CurrentUser.decorator");
const permissions_decorator_1 = require("../../../common/decorator/permissions.decorator");
let UsersResolver = class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getProfile(user) {
        return this.usersService.findById(user._id);
    }
    async getUserById(getUserById) {
        return this.usersService.findById(getUserById._userId);
    }
    async getUsers() {
        return this.usersService.findAll();
    }
    async createUser(createUserInput) {
        return this.usersService.createUser(createUserInput);
    }
    async chagePassword(user, changePasswordInput) {
        return this.usersService.changePassword(user._id, changePasswordInput);
    }
    async chagePasswordByAdmin(changePasswordInputByAdmin) {
        return this.usersService.changePasswordByAdmin(changePasswordInputByAdmin);
    }
    async chageInformation(user, changeInformationInput) {
        return this.usersService.changeInformation(user._id, changeInformationInput);
    }
    async chageInformationByAdmin(changeInformationInputByAdmin) {
        return this.usersService.changeInformationByAdmin(changeInformationInputByAdmin._id, changeInformationInputByAdmin);
    }
    async changeAvatar(changeAvatar, user) {
        return this.usersService.changeAvatar(changeAvatar, user);
    }
    async changeEmail(changeEmail, user) {
        return this.usersService.changeEmail(changeEmail, user);
    }
    async deleteUser(deleteUserInput) {
        return this.usersService.deleteById(deleteUserInput._id);
    }
    _roleId(user) {
        return this.usersService.getRole(user._roleId);
    }
};
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'getProfile' }),
    (0, graphql_1.Query)(() => user_entity_1.User),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getProfile", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'getUserById' }),
    (0, graphql_1.Query)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('getUserByIdInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto.GetUserByIdInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUserById", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'getUsers' }),
    (0, graphql_1.Mutation)(() => [user_entity_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'createUser' }),
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('changePasswordInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UserDto.ChangePasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "chagePassword", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'chagePasswordByAdmin' }),
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('changePasswordInputByAdmin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto.ChangePasswordInputByAdmin]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "chagePasswordByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('changeInformationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UserDto.ChangeInformationInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "chageInformation", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'chageInformationByAdmin' }),
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('changeInformationInputByAdmin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto.ChangeInformationInputByAdmin]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "chageInformationByAdmin", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('changeAvatarInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto.ChangeAvatarInput, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "changeAvatar", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('changeEmailInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto.ChangeEmailInput, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "changeEmail", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'deleteUser' }),
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('deleteUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDto.DeleteUserInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUser", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "_roleId", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map
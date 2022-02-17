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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_put_service_1 = require("./services.helper/put/users.put.service");
const users_find_service_1 = require("./services.helper/find/users.find.service");
const users_delete_service_1 = require("./services.helper/delete/users.delete.service");
const users_create_service_1 = require("./services.helper/create/users.create.service");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
let UsersService = class UsersService {
    constructor(usersCreateService, usersDeleteService, usersFindService, usersPutService) {
        this.usersCreateService = usersCreateService;
        this.usersDeleteService = usersDeleteService;
        this.usersFindService = usersFindService;
        this.usersPutService = usersPutService;
    }
    async createUser(createUserInput) {
        return await this.usersCreateService.createUser(createUserInput);
    }
    async deleteById(_id) {
        return await this.usersDeleteService.deleteById(_id);
    }
    async findAll() {
        return await this.usersFindService.findAll();
    }
    async findById(_id, getPassword = false) {
        return await this.usersFindService.findById(_id, getPassword);
    }
    async findByEmail(email) {
        return await this.usersFindService.findByEmail(email);
    }
    async changePassword(_id, changePasswordInput) {
        return await this.usersPutService.changePassword(_id, changePasswordInput);
    }
    async changePasswordByAdmin(changePasswordInputByAdmin) {
        return await this.usersPutService.changePasswordByAdmin(changePasswordInputByAdmin);
    }
    async changeInformation(_id, changeInformationInput) {
        return await this.usersPutService.changeInformation(_id, changeInformationInput);
    }
    async changeInformationByAdmin(_id, changeInformationInputByAdmin) {
        return await this.usersPutService.changeInformationByAdmin(_id, changeInformationInputByAdmin);
    }
    changeAvatar(changeAvatar, user) {
        return this.usersPutService.changeAvatar(changeAvatar, user);
    }
    changeEmail(changeEmail, user) {
        return this.usersPutService.changeEmail(changeEmail, user);
    }
    async getRole(_id) {
        return await this.usersFindService.findRoleById(_id);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_create_service_1.UsersCreateService,
        users_delete_service_1.UsersDeleteService,
        users_find_service_1.UsersFindService,
        users_put_service_1.UsersPutService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
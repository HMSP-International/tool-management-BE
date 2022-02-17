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
exports.UsersCreateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const roles_service_1 = require("../../../roles/roles.service");
const user_model_1 = require("../../classes/user.model");
const users_find_service_1 = require("../find/users.find.service");
const cloudinary_service_1 = require("../../../../../helpers/modules/cloudinary/cloudinary.service");
const senders_service_1 = require("../../../../../helpers/modules/senders/senders.service");
let UsersCreateService = class UsersCreateService {
    constructor(userEntity, usersFindService, rolesService, cloudinary, sendersService) {
        this.userEntity = userEntity;
        this.usersFindService = usersFindService;
        this.rolesService = rolesService;
        this.cloudinary = cloudinary;
        this.sendersService = sendersService;
    }
    async createUser(createUserInput) {
        {
            const user = await this.usersFindService.findByEmail(createUserInput.email);
            if (user)
                throw new common_1.HttpException('Email Already Exists', common_1.HttpStatus.CONFLICT);
        }
        {
            const role = await this.rolesService.findById(createUserInput._roleId);
            if (!role)
                throw new common_1.HttpException('Not Found role = ' + createUserInput._roleId, common_1.HttpStatus.BAD_REQUEST);
        }
        {
            const public_id = await this.cloudinary.uploadImageUser(createUserInput.avatar);
            createUserInput.avatar = public_id;
            const newUser = await new this.userEntity(createUserInput).save();
            await this.sendersService.sendCreateUser({
                email: newUser.email,
                password: createUserInput.password,
            });
            newUser.password = null;
            return newUser;
        }
    }
};
UsersCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.UserModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_find_service_1.UsersFindService,
        roles_service_1.RolesService,
        cloudinary_service_1.CloudinaryService,
        senders_service_1.SendersService])
], UsersCreateService);
exports.UsersCreateService = UsersCreateService;
//# sourceMappingURL=users.create.service.js.map
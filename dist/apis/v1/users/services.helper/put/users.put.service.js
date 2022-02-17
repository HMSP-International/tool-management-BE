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
exports.UsersPutService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_model_1 = require("../../classes/user.model");
const bcrypt = require("bcrypt");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const cloudinary_service_1 = require("../../../../../helpers/modules/cloudinary/cloudinary.service");
let UsersPutService = class UsersPutService {
    constructor(userEntity, cloudinary) {
        this.userEntity = userEntity;
        this.cloudinary = cloudinary;
    }
    async changePassword(_id, changePasswordInput) {
        const user = await this.userEntity.findById(_id);
        if (!user)
            throw new common_1.NotFoundException('This user not found');
        const { newPassword, currentPassword } = changePasswordInput;
        const isMatched = await bcrypt.compare(currentPassword, user.password);
        if (!isMatched) {
            throw new common_1.NotFoundException('Password Invalid');
        }
        user.password = newPassword;
        return await user.save();
    }
    async changePasswordByAdmin(changePasswordInputByAdmin) {
        const { newPassword, _id } = changePasswordInputByAdmin;
        const user = await this.userEntity.findById(_id);
        if (!user)
            throw new common_1.NotFoundException('This user not found');
        user.password = newPassword;
        return await user.save();
    }
    async changeInformation(_id, changeInformationInput) {
        let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInput, {
            new: true,
        });
        if (!user)
            throw new common_1.NotFoundException('This user not found');
        return user;
    }
    async changeInformationByAdmin(_id, changeInformationInputByAdmin) {
        delete changeInformationInputByAdmin._id;
        const isExistsEmail = await this.userEntity.findOne({
            $and: [{ email: changeInformationInputByAdmin.email }, { _id: { $ne: _id } }],
        });
        if (isExistsEmail)
            throw new common_1.NotFoundException('Email already exists');
        let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInputByAdmin, {
            new: true,
        });
        if (!user)
            throw new common_1.NotFoundException('This user not found');
        return user;
    }
    async changeAvatar({ avatar }, { _id: _userId }) {
        const user = await this.userEntity.findById(_userId);
        if (!user)
            throw new common_1.NotFoundException('This user not found');
        const oldAvatar = user.avatar;
        const public_id = await this.cloudinary.uploadImageUser(avatar);
        user.avatar = public_id;
        this.cloudinary.deleteImage(oldAvatar);
        return await user.save();
    }
    async changeEmail({ newEmail, password }, { _id: _userId }) {
        const user = await this.userEntity.findById(_userId);
        if (!user)
            throw new common_1.NotFoundException('This user not found');
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            throw new common_1.NotFoundException('Email or Password Invalid');
        }
        return await this.userEntity.findByIdAndUpdate(_userId, { email: newEmail }, { new: true });
    }
};
UsersPutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.UserModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cloudinary_service_1.CloudinaryService])
], UsersPutService);
exports.UsersPutService = UsersPutService;
//# sourceMappingURL=users.put.service.js.map
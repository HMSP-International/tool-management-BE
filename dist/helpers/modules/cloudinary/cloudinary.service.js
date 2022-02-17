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
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cloudinary_1 = require("cloudinary");
let CloudinaryService = class CloudinaryService {
    constructor(configService) {
        this.configService = configService;
    }
    async uploadImageUser(file) {
        const avatar_staff = this.configService.get('cloudinary.load_preset.avatar_staff');
        const uploadResImage = await cloudinary_1.v2.uploader.upload(file, { load_preset: avatar_staff, use_filename: true });
        return uploadResImage.public_id;
    }
    async uploadImageCustomer(file) {
        const avatar_customer = this.configService.get('cloudinary.load_preset.avatar_customer');
        const uploadResImage = await cloudinary_1.v2.uploader.upload(file, { load_preset: avatar_customer, use_filename: true });
        return uploadResImage.public_id;
    }
    async deleteImage(_publicId) {
        try {
            await cloudinary_1.v2.uploader.destroy(_publicId);
            return true;
        }
        catch (err) {
            throw new common_1.HttpException('Cant delete image', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CloudinaryService);
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=cloudinary.service.js.map
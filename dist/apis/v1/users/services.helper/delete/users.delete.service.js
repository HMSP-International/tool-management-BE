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
exports.UsersDeleteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const cloudinary_service_1 = require("../../../../../helpers/modules/cloudinary/cloudinary.service");
const user_model_1 = require("../../classes/user.model");
const collaborators_service_1 = require("../../../collaborators/collaborators.service");
const paticipants_service_1 = require("../../../paticipants/paticipants.service");
let UsersDeleteService = class UsersDeleteService {
    constructor(userEntity, cloudinary, collaboratorsService, paticipantsService) {
        this.userEntity = userEntity;
        this.cloudinary = cloudinary;
        this.collaboratorsService = collaboratorsService;
        this.paticipantsService = paticipantsService;
    }
    async deleteById(_id) {
        const user = await this.userEntity.findByIdAndDelete(_id);
        if (user === null)
            throw new common_1.NotFoundException('This user not found or maybe deleted, please refresh your page');
        this.cloudinary.deleteImage(user.avatar);
        const collaborators = await this.collaboratorsService.findByMemberId(_id);
        await this.collaboratorsService.deleteByMemberId(_id);
        const collaboratorsId = collaborators.map(c => c._id);
        await this.paticipantsService.deleteByCollboratorsId(collaboratorsId);
        return user;
    }
};
UsersDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_model_1.UserModel.name)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => collaborators_service_1.CollaboratorsService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => paticipants_service_1.PaticipantsService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        cloudinary_service_1.CloudinaryService,
        collaborators_service_1.CollaboratorsService,
        paticipants_service_1.PaticipantsService])
], UsersDeleteService);
exports.UsersDeleteService = UsersDeleteService;
//# sourceMappingURL=users.delete.service.js.map
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
exports.CollaboratorsDeleteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const paticipants_service_1 = require("../../../paticipants/paticipants.service");
const mongoose_2 = require("mongoose");
const collaborator_model_1 = require("../../classes/collaborator.model");
let CollaboratorsDeleteService = class CollaboratorsDeleteService {
    constructor(collaboratorEntity, paticipantsService) {
        this.collaboratorEntity = collaboratorEntity;
        this.paticipantsService = paticipantsService;
        this.deleteByMemberId = async (_memberId) => {
            const collaborators = await this.collaboratorEntity.deleteMany({ _memberId });
            console.log('delete collaborator when delete user', collaborators);
        };
    }
    async deleteBySpaceId(_workSpaceId) {
        await this.collaboratorEntity.deleteMany({ _workSpaceId });
    }
    async deleteByMemberAndSpace({ _memberId, _workSpaceId }, user) {
        const collaborator = await this.collaboratorEntity.findOne({ _adminId: user._id, _memberId, _workSpaceId });
        if (collaborator === null) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        this.paticipantsService.deleteByCollboratorsId([collaborator._id]);
        return await this.collaboratorEntity.findByIdAndDelete(collaborator._id);
    }
};
CollaboratorsDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collaborator_model_1.CollaboratorModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => paticipants_service_1.PaticipantsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        paticipants_service_1.PaticipantsService])
], CollaboratorsDeleteService);
exports.CollaboratorsDeleteService = CollaboratorsDeleteService;
//# sourceMappingURL=collaborators.delete.service.js.map
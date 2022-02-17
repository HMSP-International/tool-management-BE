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
exports.PaticipantsPutService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const paticipant_model_1 = require("../../classes/paticipant.model");
const collaborators_service_1 = require("../../../collaborators/collaborators.service");
let PaticipantsPutService = class PaticipantsPutService {
    constructor(paticipantEntity, collaboratorsService) {
        this.paticipantEntity = paticipantEntity;
        this.collaboratorsService = collaboratorsService;
    }
    async changeRoleOfMemberOnPaticipant(changeRoleOfMemberInput, user) {
        const { _collaboratorId, _projectId } = changeRoleOfMemberInput;
        const collaborator = await this.collaboratorsService.findById(_collaboratorId);
        if (collaborator._adminId.toString() !== user._id) {
            throw new common_1.HttpException('Not Authorization', common_1.HttpStatus.FORBIDDEN);
        }
        const paticipant = await this.paticipantEntity.findOne({ _collaboratorId, _projectId });
        if (paticipant === null) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.paticipantEntity.findByIdAndUpdate(paticipant._id, changeRoleOfMemberInput, { new: true });
    }
};
PaticipantsPutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(paticipant_model_1.PaticipantModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => collaborators_service_1.CollaboratorsService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        collaborators_service_1.CollaboratorsService])
], PaticipantsPutService);
exports.PaticipantsPutService = PaticipantsPutService;
//# sourceMappingURL=paticipants.put.service.js.map
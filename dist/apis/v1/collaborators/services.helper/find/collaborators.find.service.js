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
exports.CollaboratorsFindService = void 0;
const common_1 = require("@nestjs/common");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const collaborator_model_1 = require("../../classes/collaborator.model");
let CollaboratorsFindService = class CollaboratorsFindService {
    constructor(collaboratorEntity) {
        this.collaboratorEntity = collaboratorEntity;
        this.findOneByInvitedSpace = async (_adminId, _memberId, _workSpaceId) => {
            return await this.collaboratorEntity.findOne({ _adminId, _memberId, _workSpaceId });
        };
        this.findById = async (_id) => {
            const collaborator = await this.collaboratorEntity.findById(_id);
            if (collaborator === null) {
                throw new common_1.HttpException('Not Found _projectId', common_1.HttpStatus.BAD_REQUEST);
            }
            return collaborator;
        };
        this.findByMemberId = async (_memberId) => {
            const collaborators = await this.collaboratorEntity.find({ _memberId });
            return collaborators;
        };
        this.findByMemberIdAndSpaceIdAndOwnerId = async (data) => {
            const collaborator = await this.collaboratorEntity.findOne(data);
            return collaborator;
        };
        this.findByMemberIdAndSpaceId = async ({ _spaceIds, _memberId, }) => {
            const collaborators = [];
            for (let _workSpaceId of _spaceIds) {
                const collaborator = this.collaboratorEntity.findOne({ _workSpaceId, _memberId });
                collaborators.push(collaborator);
            }
            return await Promise.all(collaborators);
        };
    }
    async findUsersBySpaceId(_spaceId) {
        return await this.collaboratorEntity.find({ _workSpaceId: _spaceId });
    }
    async findInvitedSpaces(user) {
        const collaborators = await this.collaboratorEntity.find({ _memberId: user._id });
        return collaborators;
    }
};
CollaboratorsFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(collaborator_model_1.CollaboratorModel.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CollaboratorsFindService);
exports.CollaboratorsFindService = CollaboratorsFindService;
//# sourceMappingURL=collaborators.find.service.js.map
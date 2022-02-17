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
exports.SpacesFindService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const space_model_1 = require("../../classes/space.model");
const collaborators_service_1 = require("../../../collaborators/collaborators.service");
let SpacesFindService = class SpacesFindService {
    constructor(spaceEntity, collaboratorsService) {
        this.spaceEntity = spaceEntity;
        this.collaboratorsService = collaboratorsService;
    }
    async findAll(user) {
        const spaces = await this.spaceEntity.find({ owner: user._id }).sort('order');
        return spaces;
    }
    async findBySpaceAndOwner(_id, owner) {
        const space = await this.spaceEntity.findOne({ _id, owner });
        return space;
    }
    async findById(_id) {
        const space = await this.spaceEntity.findById(_id);
        if (space === null)
            throw new common_1.HttpException('Not Found _spaceId = ' + _id, common_1.HttpStatus.NOT_FOUND);
        return space;
    }
    async findByMemberId({ _memberId }, { _id }) {
        const collaborators = await this.collaboratorsService.findByMemberId(_memberId);
        const spaces = [];
        for (let i = 0; i < collaborators.length; i++) {
            const space = await this.spaceEntity.findById(collaborators[i]._workSpaceId.toString());
            spaces.push(space);
        }
        return spaces;
    }
};
SpacesFindService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(space_model_1.SpaceModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => collaborators_service_1.CollaboratorsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        collaborators_service_1.CollaboratorsService])
], SpacesFindService);
exports.SpacesFindService = SpacesFindService;
//# sourceMappingURL=spaces.find.service.js.map
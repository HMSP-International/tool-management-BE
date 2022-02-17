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
exports.SpacesCreateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const space_model_1 = require("../../classes/space.model");
const spaces_find_service_1 = require("../find/spaces.find.service");
let SpacesCreateService = class SpacesCreateService {
    constructor(spaceEntity, spacesFindService) {
        this.spaceEntity = spaceEntity;
        this.spacesFindService = spacesFindService;
    }
    async create(name, user) {
        const order = await this.spaceEntity.count({ owner: user._id });
        const space = new this.spaceEntity({ name, owner: user._id, order });
        await space.save();
        return this.spacesFindService.findAll(user);
    }
};
SpacesCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(space_model_1.SpaceModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        spaces_find_service_1.SpacesFindService])
], SpacesCreateService);
exports.SpacesCreateService = SpacesCreateService;
//# sourceMappingURL=spaces.create.service.js.map
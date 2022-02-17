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
exports.SpacesService = void 0;
const common_1 = require("@nestjs/common");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const spaces_create_service_1 = require("./services.helper/create/spaces.create.service");
const spaces_delete_service_1 = require("./services.helper/delete/spaces.delete.service");
const spaces_find_service_1 = require("./services.helper/find/spaces.find.service");
const spaces_put_service_1 = require("./services.helper/put/spaces.put.service");
let SpacesService = class SpacesService {
    constructor(spacesCreateService, spacesFindService, spacesDeleteService, spacesPutService) {
        this.spacesCreateService = spacesCreateService;
        this.spacesFindService = spacesFindService;
        this.spacesDeleteService = spacesDeleteService;
        this.spacesPutService = spacesPutService;
    }
    async findAll(user) {
        return await this.spacesFindService.findAll(user);
    }
    async findBySpaceAndOwner(_id, owner) {
        return await this.spacesFindService.findBySpaceAndOwner(_id, owner);
    }
    async findById(_id) {
        return await this.spacesFindService.findById(_id);
    }
    async findByMemberId(findByMemberId, user) {
        return await this.spacesFindService.findByMemberId(findByMemberId, user);
    }
    async create(name, user) {
        return await this.spacesCreateService.create(name, user);
    }
    async changeName(changeNameSpaceInput) {
        return this.spacesPutService.changeName(changeNameSpaceInput);
    }
    async deleteSpaceById(_spaceId, _userId) {
        return await this.spacesDeleteService.deleteSpaceById(_spaceId, _userId);
    }
};
SpacesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [spaces_create_service_1.SpacesCreateService,
        spaces_find_service_1.SpacesFindService,
        spaces_delete_service_1.SpacesDeleteService,
        spaces_put_service_1.SpacesPutService])
], SpacesService);
exports.SpacesService = SpacesService;
//# sourceMappingURL=spaces.service.js.map
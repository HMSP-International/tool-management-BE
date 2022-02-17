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
exports.SpacesDeleteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collaborators_service_1 = require("../../../collaborators/collaborators.service");
const mongoose_2 = require("mongoose");
const projects_service_1 = require("../../../projects/projects.service");
const space_model_1 = require("../../classes/space.model");
const spaces_find_service_1 = require("../find/spaces.find.service");
let SpacesDeleteService = class SpacesDeleteService {
    constructor(spaceEntity, projectsService, spacesFindService, collaboratorsService) {
        this.spaceEntity = spaceEntity;
        this.projectsService = projectsService;
        this.spacesFindService = spacesFindService;
        this.collaboratorsService = collaboratorsService;
    }
    async deleteSpaceById(_workSpaceId, _userId) {
        const space = await this.spacesFindService.findById(_workSpaceId);
        if (space.owner.toString() !== _userId) {
            throw new common_1.HttpException('This space is not your', common_1.HttpStatus.BAD_REQUEST);
        }
        const projects = await this.projectsService.findAll([_workSpaceId], _userId);
        if (projects.length >= 1) {
            throw new common_1.HttpException('Please delete all project first', common_1.HttpStatus.BAD_REQUEST);
        }
        this.collaboratorsService.deleteBySpaceId(_workSpaceId);
        return await this.spaceEntity.findByIdAndDelete(_workSpaceId);
    }
};
SpacesDeleteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(space_model_1.SpaceModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => collaborators_service_1.CollaboratorsService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        projects_service_1.ProjectsService,
        spaces_find_service_1.SpacesFindService,
        collaborators_service_1.CollaboratorsService])
], SpacesDeleteService);
exports.SpacesDeleteService = SpacesDeleteService;
//# sourceMappingURL=spaces.delete.service.js.map
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
exports.ProjectsCreateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const project_model_1 = require("../../classes/project.model");
const spaces_service_1 = require("../../../spaces/spaces.service");
let ProjectsCreateService = class ProjectsCreateService {
    constructor(projectEntity, spacesService) {
        this.projectEntity = projectEntity;
        this.spacesService = spacesService;
    }
    async create(createSpaceInput, user) {
        const { _spaceId } = createSpaceInput;
        const space = await this.spacesService.findBySpaceAndOwner(_spaceId, user._id);
        if (space === null)
            throw new common_1.HttpException('Not Found _spaceId or _spaceId is not yours', common_1.HttpStatus.BAD_REQUEST);
        const order = await this.projectEntity.countDocuments({ _spaceId });
        const project = await new this.projectEntity(Object.assign({ order, owner: user._id }, createSpaceInput)).save();
        return project;
    }
};
ProjectsCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_model_1.ProjectModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => spaces_service_1.SpacesService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        spaces_service_1.SpacesService])
], ProjectsCreateService);
exports.ProjectsCreateService = ProjectsCreateService;
//# sourceMappingURL=projects.create.service.js.map
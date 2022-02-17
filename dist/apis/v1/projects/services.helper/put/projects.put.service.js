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
exports.ProjectsPutService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const project_model_1 = require("../../classes/project.model");
let ProjectsPutService = class ProjectsPutService {
    constructor(projectEntity) {
        this.projectEntity = projectEntity;
    }
    async changeNameProject({ _projectId, name }, user) {
        const project = await this.projectEntity.findById(_projectId);
        if (project === null)
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        if (project.owner.toString() !== user._id)
            throw new common_1.HttpException('FORBIDDEN', common_1.HttpStatus.FORBIDDEN);
        const projectEdited = await this.projectEntity.findByIdAndUpdate(_projectId, { name }, { new: true });
        return projectEdited;
    }
};
ProjectsPutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_model_1.ProjectModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProjectsPutService);
exports.ProjectsPutService = ProjectsPutService;
//# sourceMappingURL=projects.put.service.js.map
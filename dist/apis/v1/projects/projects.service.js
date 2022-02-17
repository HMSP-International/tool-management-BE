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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const projects_create_service_1 = require("./services.helper/create/projects.create.service");
const projects_delete_service_1 = require("./services.helper/delete/projects.delete.service");
const projects_find_service_1 = require("./services.helper/find/projects.find.service");
const projects_put_service_1 = require("./services.helper/put/projects.put.service");
let ProjectsService = class ProjectsService {
    constructor(projectsCreateService, projectsDeleteService, projectsFindService, projectsPutService) {
        this.projectsCreateService = projectsCreateService;
        this.projectsDeleteService = projectsDeleteService;
        this.projectsFindService = projectsFindService;
        this.projectsPutService = projectsPutService;
    }
    async findAll(_spacesId, _userId) {
        return await this.projectsFindService.findAll(_spacesId, _userId);
    }
    async findById(_id) {
        return await this.projectsFindService.findById(_id);
    }
    async findByListId(_ids) {
        return await this.projectsFindService.findByListId(_ids);
    }
    async findAllByCollaborator(getProjectsInput) {
        return await this.projectsFindService.findAllByCollaborator(getProjectsInput);
    }
    async findByMemberIdAndSpaceId(findByMemberIdAndSpaceId) {
        return await this.projectsFindService.findByMemberIdAndSpaceId(findByMemberIdAndSpaceId);
    }
    async create(createSpaceInput, user) {
        return await this.projectsCreateService.create(createSpaceInput, user);
    }
    async deleteProjectById(_projectId, user) {
        return await this.projectsDeleteService.deleteProjectById(_projectId, user);
    }
    async changeNameProject(changeNameProject, user) {
        return await this.projectsPutService.changeNameProject(changeNameProject, user);
    }
};
ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [projects_create_service_1.ProjectsCreateService,
        projects_delete_service_1.ProjectsDeleteService,
        projects_find_service_1.ProjectsFindService,
        projects_put_service_1.ProjectsPutService])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map
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
exports.ProjectsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const projects_service_1 = require("./projects.service");
const project_entity_1 = require("./classes/project.entity");
const CurrentUser_decorator_1 = require("../../../common/decorator/CurrentUser.decorator");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const ProjectDTO = require("./classes/projects.dto");
let ProjectsResolver = class ProjectsResolver {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    async getProjects(user, getProjectsInput) {
        return this.projectsService.findAll(getProjectsInput._spacesId, user._id);
    }
    async getProjectById(getProjectInput) {
        return this.projectsService.findById(getProjectInput._projectId);
    }
    async getProjectByMemberIdAndSpaceId(findByMemberIdAndSpaceId) {
        return this.projectsService.findByMemberIdAndSpaceId(findByMemberIdAndSpaceId);
    }
    async getProjectsByCollaborator(getProjectsInput) {
        return this.projectsService.findAllByCollaborator(getProjectsInput);
    }
    async createProject(user, createSpaceInput) {
        return this.projectsService.create(createSpaceInput, user);
    }
    async deleteProject(deleteProjectInput, user) {
        return this.projectsService.deleteProjectById(deleteProjectInput._projectId, user);
    }
    async changeNameProject(changeNameProject, user) {
        return this.projectsService.changeNameProject(changeNameProject, user);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => [project_entity_1.Project]),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('getProjectsInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ProjectDTO.GetProjectsInput]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "getProjects", null);
__decorate([
    (0, graphql_1.Mutation)(() => project_entity_1.Project),
    __param(0, (0, graphql_1.Args)('getProjectInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectDTO.GetProjectInput]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "getProjectById", null);
__decorate([
    (0, graphql_1.Mutation)(() => [project_entity_1.Project]),
    __param(0, (0, graphql_1.Args)('findByMemberIdAndSpaceIdInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectDTO.FindByMemberIdAndSpaceIdInput]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "getProjectByMemberIdAndSpaceId", null);
__decorate([
    (0, graphql_1.Mutation)(() => [project_entity_1.Project]),
    __param(0, (0, graphql_1.Args)('getProjectsInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectDTO.GetProjectsInput]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "getProjectsByCollaborator", null);
__decorate([
    (0, graphql_1.Mutation)(() => project_entity_1.Project),
    __param(0, (0, CurrentUser_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('createProjectInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ProjectDTO.CreateProjectInput]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "createProject", null);
__decorate([
    (0, graphql_1.Mutation)(() => project_entity_1.Project),
    __param(0, (0, graphql_1.Args)('deleteProjectInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectDTO.DeleteProjectInput, Object]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "deleteProject", null);
__decorate([
    (0, graphql_1.Mutation)(() => project_entity_1.Project),
    __param(0, (0, graphql_1.Args)('changeNameProjectInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProjectDTO.ChangeNameProjectInput, Object]),
    __metadata("design:returntype", Promise)
], ProjectsResolver.prototype, "changeNameProject", null);
ProjectsResolver = __decorate([
    (0, graphql_1.Resolver)(() => project_entity_1.Project),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsResolver);
exports.ProjectsResolver = ProjectsResolver;
//# sourceMappingURL=projects.resolver.js.map
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
exports.TasksResolverFieldService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../../users/users.service");
const projects_service_1 = require("../../../projects/projects.service");
const comments_service_1 = require("../../../comments/comments.service");
let TasksResolverFieldService = class TasksResolverFieldService {
    constructor(projectsService, usersService, commentsService) {
        this.projectsService = projectsService;
        this.usersService = usersService;
        this.commentsService = commentsService;
    }
    getProject(_id) {
        return this.projectsService.findById(_id);
    }
    getUser(_id) {
        return this.usersService.findById(_id);
    }
    async getComments(ids) {
        return await this.commentsService.getModel().find({ _id: { $in: ids } });
    }
};
TasksResolverFieldService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => projects_service_1.ProjectsService))),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => comments_service_1.CommentsService))),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService,
        users_service_1.UsersService,
        comments_service_1.CommentsService])
], TasksResolverFieldService);
exports.TasksResolverFieldService = TasksResolverFieldService;
//# sourceMappingURL=tasks.resolveField.service.js.map
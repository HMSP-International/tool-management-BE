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
exports.CommentsResolverFieldService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../../users/users.service");
const tasks_service_1 = require("../../../tasks/tasks.service");
const user_model_1 = require("../../../users/classes/user.model");
const task_model_1 = require("../../../tasks/classes/task.model");
let CommentsResolverFieldService = class CommentsResolverFieldService {
    constructor(usersService, tasksService) {
        this.usersService = usersService;
        this.tasksService = tasksService;
    }
    async getTask(_taskId) {
        return await this.tasksService.findById({ _taskId });
    }
    async getUser(_id) {
        const user = await this.usersService.findById(_id);
        if (user === null)
            throw new common_1.HttpException('_id user not found', common_1.HttpStatus.BAD_REQUEST);
        return user;
    }
};
CommentsResolverFieldService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => tasks_service_1.TasksService))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        tasks_service_1.TasksService])
], CommentsResolverFieldService);
exports.CommentsResolverFieldService = CommentsResolverFieldService;
//# sourceMappingURL=comments.resolveField.service.js.map
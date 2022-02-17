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
exports.CommentsCreateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_model_1 = require("../../classes/comment.model");
const tasks_service_1 = require("../../../tasks/tasks.service");
const users_service_1 = require("../../../users/users.service");
let CommentsCreateService = class CommentsCreateService {
    constructor(commentEntity, usersService, tasksService) {
        this.commentEntity = commentEntity;
        this.usersService = usersService;
        this.tasksService = tasksService;
    }
    async create({ _taskId, content }, user) {
        if (this.usersService.findById(user._id) === null) {
            throw new common_1.HttpException('Not Found userID', common_1.HttpStatus.NOT_FOUND);
        }
        const task = await this.tasksService.findById({ _taskId });
        const comment = await new this.commentEntity({ _taskId, _userId: user._id, content }).save();
        task.comments.push(comment._id);
        task.save();
        return comment;
    }
};
CommentsCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_model_1.CommentModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => tasks_service_1.TasksService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService,
        tasks_service_1.TasksService])
], CommentsCreateService);
exports.CommentsCreateService = CommentsCreateService;
//# sourceMappingURL=comments.create.service.js.map
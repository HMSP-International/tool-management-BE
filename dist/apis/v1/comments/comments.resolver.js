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
exports.CommentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const comments_service_1 = require("./comments.service");
const comment_entity_1 = require("./classes/comment.entity");
const commentDTO = require("./classes/comments.dto");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const CurrentUser_decorator_1 = require("../../../common/decorator/CurrentUser.decorator");
const task_entity_1 = require("../tasks/classes/task.entity");
const user_entity_1 = require("../users/classes/user.entity");
let CommentsResolver = class CommentsResolver {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    createComment(createCommentInput, user) {
        return this.commentsService.create(createCommentInput, user);
    }
    deleteCommentById(deleteCommentInput, user) {
        return this.commentsService.deleteById(deleteCommentInput, user);
    }
    changeContentByCommentId(putChangeCommentInput, user) {
        return this.commentsService.changeContentByCommentId(putChangeCommentInput, user);
    }
    _userId(comment) {
        return this.commentsService.getUser(comment._userId);
    }
    _taskId(comment) {
        return this.commentsService.getTask(comment._taskId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => comment_entity_1.Comment),
    __param(0, (0, graphql_1.Args)('createCommentInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commentDTO.CreateCommentInput, Object]),
    __metadata("design:returntype", void 0)
], CommentsResolver.prototype, "createComment", null);
__decorate([
    (0, graphql_1.Mutation)(() => comment_entity_1.Comment),
    __param(0, (0, graphql_1.Args)('deleteCommentInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commentDTO.DeleteCommentInput, Object]),
    __metadata("design:returntype", void 0)
], CommentsResolver.prototype, "deleteCommentById", null);
__decorate([
    (0, graphql_1.Mutation)(() => comment_entity_1.Comment),
    __param(0, (0, graphql_1.Args)('putChangeCommentInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commentDTO.PutChangeCommentInput, Object]),
    __metadata("design:returntype", void 0)
], CommentsResolver.prototype, "changeContentByCommentId", null);
__decorate([
    (0, graphql_1.ResolveField)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_entity_1.Comment]),
    __metadata("design:returntype", void 0)
], CommentsResolver.prototype, "_userId", null);
__decorate([
    (0, graphql_1.ResolveField)(() => task_entity_1.Task),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_entity_1.Comment]),
    __metadata("design:returntype", void 0)
], CommentsResolver.prototype, "_taskId", null);
CommentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => comment_entity_1.Comment),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsResolver);
exports.CommentsResolver = CommentsResolver;
//# sourceMappingURL=comments.resolver.js.map
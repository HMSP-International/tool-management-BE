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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comments_create_service_1 = require("./service.helper/create/comments.create.service");
const comments_delete_service_1 = require("./service.helper/delete/comments.delete.service");
const comments_find_service_1 = require("./service.helper/find/comments.find.service");
const comments_put_service_1 = require("./service.helper/put/comments.put.service");
const comments_resolveField_service_1 = require("./service.helper/resolveField/comments.resolveField.service");
let CommentsService = class CommentsService {
    constructor(commentsCreateService, commentsDeleteService, commentsFindService, commentsPutService, commentsResolverFieldService) {
        this.commentsCreateService = commentsCreateService;
        this.commentsDeleteService = commentsDeleteService;
        this.commentsFindService = commentsFindService;
        this.commentsPutService = commentsPutService;
        this.commentsResolverFieldService = commentsResolverFieldService;
    }
    create(createCommentInput, user) {
        return this.commentsCreateService.create(createCommentInput, user);
    }
    deleteById(comment, user) {
        return this.commentsDeleteService.deleteById(comment, user);
    }
    deleteByTaskId(_taskId) {
        return this.commentsDeleteService.deleteByTaskId(_taskId);
    }
    changeContentByCommentId(comment, user) {
        return this.commentsPutService.changeContentByCommentId(comment, user);
    }
    getModel() {
        return this.commentsFindService.getModel();
    }
    getUser(_id) {
        return this.commentsResolverFieldService.getUser(_id);
    }
    getTask(_id) {
        return this.commentsResolverFieldService.getTask(_id);
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comments_create_service_1.CommentsCreateService,
        comments_delete_service_1.CommentsDeleteService,
        comments_find_service_1.CommentsFindService,
        comments_put_service_1.CommentsPutService,
        comments_resolveField_service_1.CommentsResolverFieldService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map
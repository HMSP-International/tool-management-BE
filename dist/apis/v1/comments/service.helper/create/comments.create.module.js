"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsCreateModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const comment_model_1 = require("../../classes/comment.model");
const users_module_1 = require("../../../users/users.module");
const tasks_module_1 = require("../../../tasks/tasks.module");
const comments_create_service_1 = require("./comments.create.service");
let CommentsCreateModule = class CommentsCreateModule {
};
CommentsCreateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: comment_model_1.CommentModel.name, schema: comment_model_1.CommentSchema }]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => tasks_module_1.TasksModule),
        ],
        providers: [comments_create_service_1.CommentsCreateService],
        exports: [comments_create_service_1.CommentsCreateService],
    })
], CommentsCreateModule);
exports.CommentsCreateModule = CommentsCreateModule;
//# sourceMappingURL=comments.create.module.js.map
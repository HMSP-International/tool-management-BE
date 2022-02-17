"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const comments_create_module_1 = require("./service.helper/create/comments.create.module");
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_resolver_1 = require("./comments.resolver");
const comments_delete_module_1 = require("./service.helper/delete/comments.delete.module");
const comments_resolveField_module_1 = require("./service.helper/resolveField/comments.resolveField.module");
const comments_find_module_1 = require("./service.helper/find/comments.find.module");
const comments_put_module_1 = require("./service.helper/put/comments.put.module");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            comments_create_module_1.CommentsCreateModule,
            comments_delete_module_1.CommentsDeleteModule,
            comments_find_module_1.CommentsFindModule,
            comments_put_module_1.CommentsPutModule,
            comments_resolveField_module_1.CollaboratorsResolverFieldModule,
        ],
        providers: [comments_resolver_1.CommentsResolver, comments_service_1.CommentsService],
        exports: [comments_service_1.CommentsService],
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map
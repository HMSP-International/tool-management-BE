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
exports.Comment = void 0;
const graphql_1 = require("@nestjs/graphql");
const task_entity_1 = require("../../tasks/classes/task.entity");
const user_entity_1 = require("../../users/classes/user.entity");
let Comment = class Comment {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Comment.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => task_entity_1.Task),
    __metadata("design:type", String)
], Comment.prototype, "_taskId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", String)
], Comment.prototype, "_userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
Comment = __decorate([
    (0, graphql_1.ObjectType)()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map
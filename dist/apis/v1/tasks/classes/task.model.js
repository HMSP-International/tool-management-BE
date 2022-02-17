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
exports.TaskSchema = exports.TaskModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const list_model_1 = require("../../lists/classes/list.model");
const timestamp_1 = require("./timestamp");
const project_model_1 = require("../../projects/classes/project.model");
const user_model_1 = require("../../users/classes/user.model");
const comment_model_1 = require("../../comments/classes/comment.model");
const ObjectId = mongoose.SchemaTypes.ObjectId;
let TaskModel = class TaskModel {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], TaskModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: list_model_1.ListModel.name, required: true }),
    __metadata("design:type", String)
], TaskModel.prototype, "_listId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], TaskModel.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_model_1.UserModel.name, required: true }),
    __metadata("design:type", String)
], TaskModel.prototype, "reporter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: timestamp_1.TimestampSchema, default: { createAt: Date.now(), updateAt: Date.now() } }),
    __metadata("design:type", Object)
], TaskModel.prototype, "timestamp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: project_model_1.ProjectModel.name, required: true }),
    __metadata("design:type", String)
], TaskModel.prototype, "_projectId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, ref: user_model_1.UserModel.name }),
    __metadata("design:type", String)
], TaskModel.prototype, "assignee", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], TaskModel.prototype, "descriptions", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: ObjectId, default: [], ref: comment_model_1.CommentModel.name }]),
    __metadata("design:type", Array)
], TaskModel.prototype, "comments", void 0);
TaskModel = __decorate([
    (0, mongoose_1.Schema)()
], TaskModel);
exports.TaskModel = TaskModel;
exports.TaskSchema = mongoose_1.SchemaFactory.createForClass(TaskModel);
//# sourceMappingURL=task.model.js.map
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
exports.DragAndDrop = exports.Draggable = exports.Task = void 0;
const graphql_1 = require("@nestjs/graphql");
const project_entity_1 = require("../../projects/classes/project.entity");
const user_entity_1 = require("../../users/classes/user.entity");
const comment_entity_1 = require("../../comments/classes/comment.entity");
const timestamp_1 = require("./timestamp");
const tasks_dto_1 = require("./tasks.dto");
let Task = class Task {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Task.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Task.prototype, "_listId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    __metadata("design:type", String)
], Task.prototype, "reporter", void 0);
__decorate([
    (0, graphql_1.Field)(() => timestamp_1.Timestamp),
    __metadata("design:type", timestamp_1.Timestamp)
], Task.prototype, "timestamp", void 0);
__decorate([
    (0, graphql_1.Field)(() => project_entity_1.Project),
    __metadata("design:type", String)
], Task.prototype, "_projectId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User, { nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "assignee", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Task.prototype, "descriptions", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comment_entity_1.Comment]),
    __metadata("design:type", Array)
], Task.prototype, "comments", void 0);
Task = __decorate([
    (0, graphql_1.ObjectType)()
], Task);
exports.Task = Task;
let Draggable = class Draggable {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Draggable.prototype, "_listId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], Draggable.prototype, "index", void 0);
Draggable = __decorate([
    (0, graphql_1.ObjectType)()
], Draggable);
exports.Draggable = Draggable;
let DragAndDrop = class DragAndDrop {
};
__decorate([
    (0, graphql_1.Field)(() => Draggable),
    __metadata("design:type", tasks_dto_1.DraggableLocationAnotherList)
], DragAndDrop.prototype, "destination", void 0);
__decorate([
    (0, graphql_1.Field)(() => Draggable),
    __metadata("design:type", tasks_dto_1.DraggableLocationAnotherList)
], DragAndDrop.prototype, "source", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DragAndDrop.prototype, "_taskId", void 0);
DragAndDrop = __decorate([
    (0, graphql_1.ObjectType)()
], DragAndDrop);
exports.DragAndDrop = DragAndDrop;
//# sourceMappingURL=task.entity.js.map
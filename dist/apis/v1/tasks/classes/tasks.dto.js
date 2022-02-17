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
exports.GetByUserId = exports.ChangeListOfTaskWithDragAndDropInAnotherListInput = exports.DraggableLocationAnotherList = exports.ChangeListOfTaskWithDragAndDropIn1ListInput = exports.DraggableLocation1List = exports.ChangeListOfTaskInput = exports.ChangeDescriptionsInput = exports.ChangeAssigneeInput = exports.ChangeTaskNameInput = exports.DeleteTaskInput = exports.CreateTaskInput = exports.GetTaskByIdInput = exports.GetTasksInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let GetTasksInput = class GetTasksInput {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], GetTasksInput.prototype, "_listId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], GetTasksInput.prototype, "_userIds", void 0);
GetTasksInput = __decorate([
    (0, graphql_1.InputType)()
], GetTasksInput);
exports.GetTasksInput = GetTasksInput;
let GetTaskByIdInput = class GetTaskByIdInput {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], GetTaskByIdInput.prototype, "_taskId", void 0);
GetTaskByIdInput = __decorate([
    (0, graphql_1.InputType)()
], GetTaskByIdInput);
exports.GetTaskByIdInput = GetTaskByIdInput;
let CreateTaskInput = class CreateTaskInput {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateTaskInput.prototype, "_listId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateTaskInput.prototype, "assignee", void 0);
__decorate([
    (0, class_validator_1.Length)(1),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateTaskInput.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateTaskInput.prototype, "descriptions", void 0);
CreateTaskInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTaskInput);
exports.CreateTaskInput = CreateTaskInput;
let DeleteTaskInput = class DeleteTaskInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], DeleteTaskInput.prototype, "_taskIds", void 0);
DeleteTaskInput = __decorate([
    (0, graphql_1.InputType)()
], DeleteTaskInput);
exports.DeleteTaskInput = DeleteTaskInput;
let ChangeTaskNameInput = class ChangeTaskNameInput {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeTaskNameInput.prototype, "_taskId", void 0);
__decorate([
    (0, class_validator_1.Length)(1),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeTaskNameInput.prototype, "name", void 0);
ChangeTaskNameInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeTaskNameInput);
exports.ChangeTaskNameInput = ChangeTaskNameInput;
let ChangeAssigneeInput = class ChangeAssigneeInput {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeAssigneeInput.prototype, "_taskId", void 0);
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeAssigneeInput.prototype, "assignee", void 0);
ChangeAssigneeInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeAssigneeInput);
exports.ChangeAssigneeInput = ChangeAssigneeInput;
let ChangeDescriptionsInput = class ChangeDescriptionsInput {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeDescriptionsInput.prototype, "_taskId", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeDescriptionsInput.prototype, "descriptions", void 0);
ChangeDescriptionsInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeDescriptionsInput);
exports.ChangeDescriptionsInput = ChangeDescriptionsInput;
let ChangeListOfTaskInput = class ChangeListOfTaskInput {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeListOfTaskInput.prototype, "_taskId", void 0);
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeListOfTaskInput.prototype, "_listId", void 0);
ChangeListOfTaskInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeListOfTaskInput);
exports.ChangeListOfTaskInput = ChangeListOfTaskInput;
let DraggableLocation1List = class DraggableLocation1List {
};
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], DraggableLocation1List.prototype, "index", void 0);
DraggableLocation1List = __decorate([
    (0, graphql_1.InputType)()
], DraggableLocation1List);
exports.DraggableLocation1List = DraggableLocation1List;
let ChangeListOfTaskWithDragAndDropIn1ListInput = class ChangeListOfTaskWithDragAndDropIn1ListInput {
};
__decorate([
    (0, graphql_1.Field)(() => DraggableLocation1List),
    __metadata("design:type", Object)
], ChangeListOfTaskWithDragAndDropIn1ListInput.prototype, "destination", void 0);
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeListOfTaskWithDragAndDropIn1ListInput.prototype, "_taskId", void 0);
ChangeListOfTaskWithDragAndDropIn1ListInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeListOfTaskWithDragAndDropIn1ListInput);
exports.ChangeListOfTaskWithDragAndDropIn1ListInput = ChangeListOfTaskWithDragAndDropIn1ListInput;
let DraggableLocationAnotherList = class DraggableLocationAnotherList {
};
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], DraggableLocationAnotherList.prototype, "index", void 0);
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DraggableLocationAnotherList.prototype, "_listId", void 0);
DraggableLocationAnotherList = __decorate([
    (0, graphql_1.InputType)()
], DraggableLocationAnotherList);
exports.DraggableLocationAnotherList = DraggableLocationAnotherList;
let ChangeListOfTaskWithDragAndDropInAnotherListInput = class ChangeListOfTaskWithDragAndDropInAnotherListInput {
};
__decorate([
    (0, graphql_1.Field)(() => DraggableLocationAnotherList),
    __metadata("design:type", Object)
], ChangeListOfTaskWithDragAndDropInAnotherListInput.prototype, "destination", void 0);
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeListOfTaskWithDragAndDropInAnotherListInput.prototype, "_taskId", void 0);
ChangeListOfTaskWithDragAndDropInAnotherListInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeListOfTaskWithDragAndDropInAnotherListInput);
exports.ChangeListOfTaskWithDragAndDropInAnotherListInput = ChangeListOfTaskWithDragAndDropInAnotherListInput;
let GetByUserId = class GetByUserId {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], GetByUserId.prototype, "_", void 0);
GetByUserId = __decorate([
    (0, graphql_1.InputType)()
], GetByUserId);
exports.GetByUserId = GetByUserId;
//# sourceMappingURL=tasks.dto.js.map
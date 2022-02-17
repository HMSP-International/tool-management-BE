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
exports.ChangeNameListInput = exports.DeleteListInput = exports.PutListsFormatedInput = exports.GetListsInput = exports.CreateListInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateListInput = class CreateListInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateListInput.prototype, "_projectId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 30),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateListInput.prototype, "name", void 0);
CreateListInput = __decorate([
    (0, graphql_1.InputType)()
], CreateListInput);
exports.CreateListInput = CreateListInput;
let GetListsInput = class GetListsInput {
};
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], GetListsInput.prototype, "_projectId", void 0);
GetListsInput = __decorate([
    (0, graphql_1.InputType)()
], GetListsInput);
exports.GetListsInput = GetListsInput;
let PutListsFormatedInput = class PutListsFormatedInput {
};
PutListsFormatedInput = __decorate([
    (0, graphql_1.InputType)()
], PutListsFormatedInput);
exports.PutListsFormatedInput = PutListsFormatedInput;
let DeleteListInput = class DeleteListInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteListInput.prototype, "_listId", void 0);
DeleteListInput = __decorate([
    (0, graphql_1.InputType)()
], DeleteListInput);
exports.DeleteListInput = DeleteListInput;
let ChangeNameListInput = class ChangeNameListInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeNameListInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeNameListInput.prototype, "_listId", void 0);
ChangeNameListInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeNameListInput);
exports.ChangeNameListInput = ChangeNameListInput;
//# sourceMappingURL=lists.dto.js.map
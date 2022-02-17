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
exports.FindByMemberId = exports.DeleteSpaceInput = exports.ChangeNameSpaceInput = exports.CreateSpaceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateSpaceInput = class CreateSpaceInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateSpaceInput.prototype, "name", void 0);
CreateSpaceInput = __decorate([
    (0, graphql_1.InputType)()
], CreateSpaceInput);
exports.CreateSpaceInput = CreateSpaceInput;
let ChangeNameSpaceInput = class ChangeNameSpaceInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeNameSpaceInput.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeNameSpaceInput.prototype, "name", void 0);
ChangeNameSpaceInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeNameSpaceInput);
exports.ChangeNameSpaceInput = ChangeNameSpaceInput;
let DeleteSpaceInput = class DeleteSpaceInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteSpaceInput.prototype, "_spaceId", void 0);
DeleteSpaceInput = __decorate([
    (0, graphql_1.InputType)()
], DeleteSpaceInput);
exports.DeleteSpaceInput = DeleteSpaceInput;
let FindByMemberId = class FindByMemberId {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FindByMemberId.prototype, "_memberId", void 0);
FindByMemberId = __decorate([
    (0, graphql_1.InputType)()
], FindByMemberId);
exports.FindByMemberId = FindByMemberId;
//# sourceMappingURL=spaces.dto.js.map
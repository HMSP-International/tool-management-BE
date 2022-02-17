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
exports.FindByMemberIdAndSpaceIdInput = exports.ChangeNameProjectInput = exports.DeleteProjectInput = exports.GetProjectInput = exports.GetProjectsInput = exports.CreateProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateProjectInput = class CreateProjectInput {
};
__decorate([
    (0, class_validator_1.Length)(1, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateProjectInput.prototype, "_spaceId", void 0);
CreateProjectInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProjectInput);
exports.CreateProjectInput = CreateProjectInput;
let GetProjectsInput = class GetProjectsInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], GetProjectsInput.prototype, "_spacesId", void 0);
GetProjectsInput = __decorate([
    (0, graphql_1.InputType)()
], GetProjectsInput);
exports.GetProjectsInput = GetProjectsInput;
let GetProjectInput = class GetProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], GetProjectInput.prototype, "_projectId", void 0);
GetProjectInput = __decorate([
    (0, graphql_1.InputType)()
], GetProjectInput);
exports.GetProjectInput = GetProjectInput;
let DeleteProjectInput = class DeleteProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteProjectInput.prototype, "_projectId", void 0);
DeleteProjectInput = __decorate([
    (0, graphql_1.InputType)()
], DeleteProjectInput);
exports.DeleteProjectInput = DeleteProjectInput;
let ChangeNameProjectInput = class ChangeNameProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeNameProjectInput.prototype, "_projectId", void 0);
__decorate([
    (0, class_validator_1.Length)(1, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeNameProjectInput.prototype, "name", void 0);
ChangeNameProjectInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeNameProjectInput);
exports.ChangeNameProjectInput = ChangeNameProjectInput;
let FindByMemberIdAndSpaceIdInput = class FindByMemberIdAndSpaceIdInput {
};
__decorate([
    (0, class_validator_1.Length)(24, 24),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FindByMemberIdAndSpaceIdInput.prototype, "_memberId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], FindByMemberIdAndSpaceIdInput.prototype, "_spaceId", void 0);
FindByMemberIdAndSpaceIdInput = __decorate([
    (0, graphql_1.InputType)()
], FindByMemberIdAndSpaceIdInput);
exports.FindByMemberIdAndSpaceIdInput = FindByMemberIdAndSpaceIdInput;
//# sourceMappingURL=projects.dto.js.map
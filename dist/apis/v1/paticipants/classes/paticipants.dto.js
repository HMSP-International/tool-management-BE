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
exports.GetPaticipantByProjectAndMemberInput = exports.ChangeRoleOfMemberInput = exports.GetUsersBelongProjectInput = exports.DeletePaticipantInput = exports.ProjectsBySpacesAndMemberInput = exports.CreatePaticipantInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
var ROLE;
(function (ROLE) {
    ROLE[ROLE["member"] = 0] = "member";
    ROLE[ROLE["admin"] = 1] = "admin";
})(ROLE || (ROLE = {}));
let CreatePaticipantInput = class CreatePaticipantInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreatePaticipantInput.prototype, "_memberId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreatePaticipantInput.prototype, "_projectId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(ROLE, { message: 'only have values ​​like ' + JSON.stringify(ROLE) }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreatePaticipantInput.prototype, "role", void 0);
CreatePaticipantInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePaticipantInput);
exports.CreatePaticipantInput = CreatePaticipantInput;
let ProjectsBySpacesAndMemberInput = class ProjectsBySpacesAndMemberInput {
};
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], ProjectsBySpacesAndMemberInput.prototype, "_spaceIds", void 0);
ProjectsBySpacesAndMemberInput = __decorate([
    (0, graphql_1.InputType)()
], ProjectsBySpacesAndMemberInput);
exports.ProjectsBySpacesAndMemberInput = ProjectsBySpacesAndMemberInput;
let DeletePaticipantInput = class DeletePaticipantInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeletePaticipantInput.prototype, "_memberId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeletePaticipantInput.prototype, "_projectId", void 0);
DeletePaticipantInput = __decorate([
    (0, graphql_1.InputType)()
], DeletePaticipantInput);
exports.DeletePaticipantInput = DeletePaticipantInput;
let GetUsersBelongProjectInput = class GetUsersBelongProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], GetUsersBelongProjectInput.prototype, "_projectId", void 0);
GetUsersBelongProjectInput = __decorate([
    (0, graphql_1.InputType)()
], GetUsersBelongProjectInput);
exports.GetUsersBelongProjectInput = GetUsersBelongProjectInput;
let ChangeRoleOfMemberInput = class ChangeRoleOfMemberInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeRoleOfMemberInput.prototype, "_collaboratorId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeRoleOfMemberInput.prototype, "_projectId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(ROLE, { message: 'only have values ​​like ' + JSON.stringify(ROLE) }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeRoleOfMemberInput.prototype, "role", void 0);
ChangeRoleOfMemberInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeRoleOfMemberInput);
exports.ChangeRoleOfMemberInput = ChangeRoleOfMemberInput;
let GetPaticipantByProjectAndMemberInput = class GetPaticipantByProjectAndMemberInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], GetPaticipantByProjectAndMemberInput.prototype, "_projectId", void 0);
GetPaticipantByProjectAndMemberInput = __decorate([
    (0, graphql_1.InputType)()
], GetPaticipantByProjectAndMemberInput);
exports.GetPaticipantByProjectAndMemberInput = GetPaticipantByProjectAndMemberInput;
//# sourceMappingURL=paticipants.dto.js.map
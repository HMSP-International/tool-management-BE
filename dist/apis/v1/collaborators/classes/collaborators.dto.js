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
exports.DeleteByUserAndSpaceInput = exports.FindUsersBySpaceId = exports.PutInvitedSpaceInput = exports.VerifyInviteSpaceInput = exports.InviteSpaceInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let InviteSpaceInput = class InviteSpaceInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], InviteSpaceInput.prototype, "_workSpaceId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], InviteSpaceInput.prototype, "_memberId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], InviteSpaceInput.prototype, "role", void 0);
InviteSpaceInput = __decorate([
    (0, graphql_1.InputType)()
], InviteSpaceInput);
exports.InviteSpaceInput = InviteSpaceInput;
let VerifyInviteSpaceInput = class VerifyInviteSpaceInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], VerifyInviteSpaceInput.prototype, "jwt", void 0);
VerifyInviteSpaceInput = __decorate([
    (0, graphql_1.InputType)()
], VerifyInviteSpaceInput);
exports.VerifyInviteSpaceInput = VerifyInviteSpaceInput;
let PutInvitedSpaceInput = class PutInvitedSpaceInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PutInvitedSpaceInput.prototype, "_workSpaceId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => String),
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], PutInvitedSpaceInput.prototype, "_memberIds", void 0);
PutInvitedSpaceInput = __decorate([
    (0, graphql_1.InputType)()
], PutInvitedSpaceInput);
exports.PutInvitedSpaceInput = PutInvitedSpaceInput;
let FindUsersBySpaceId = class FindUsersBySpaceId {
};
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", String)
], FindUsersBySpaceId.prototype, "_spaceId", void 0);
FindUsersBySpaceId = __decorate([
    (0, graphql_1.InputType)()
], FindUsersBySpaceId);
exports.FindUsersBySpaceId = FindUsersBySpaceId;
let DeleteByUserAndSpaceInput = class DeleteByUserAndSpaceInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteByUserAndSpaceInput.prototype, "_workSpaceId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteByUserAndSpaceInput.prototype, "_memberId", void 0);
DeleteByUserAndSpaceInput = __decorate([
    (0, graphql_1.InputType)()
], DeleteByUserAndSpaceInput);
exports.DeleteByUserAndSpaceInput = DeleteByUserAndSpaceInput;
//# sourceMappingURL=collaborators.dto.js.map
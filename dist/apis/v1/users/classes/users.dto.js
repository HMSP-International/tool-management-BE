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
exports.ChangeEmailInput = exports.ChangeAvatarInput = exports.GetUserByIdInput = exports.DeleteUserOutput = exports.ChangeInformationInputByAdmin = exports.ChangeInformationInput = exports.ChangePasswordInputByAdmin = exports.ChangePasswordInput = exports.DeleteUserInput = exports.CreateUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 40),
    (0, class_validator_1.IsEmail)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "displayName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "_roleId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "title", void 0);
CreateUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
let DeleteUserInput = class DeleteUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteUserInput.prototype, "_id", void 0);
DeleteUserInput = __decorate([
    (0, graphql_1.InputType)()
], DeleteUserInput);
exports.DeleteUserInput = DeleteUserInput;
let ChangePasswordInput = class ChangePasswordInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "currentPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangePasswordInput.prototype, "newPassword", void 0);
ChangePasswordInput = __decorate([
    (0, graphql_1.InputType)()
], ChangePasswordInput);
exports.ChangePasswordInput = ChangePasswordInput;
let ChangePasswordInputByAdmin = class ChangePasswordInputByAdmin {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangePasswordInputByAdmin.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangePasswordInputByAdmin.prototype, "newPassword", void 0);
ChangePasswordInputByAdmin = __decorate([
    (0, graphql_1.InputType)()
], ChangePasswordInputByAdmin);
exports.ChangePasswordInputByAdmin = ChangePasswordInputByAdmin;
let ChangeInformationInput = class ChangeInformationInput {
};
__decorate([
    (0, class_validator_1.Length)(1, 30),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationInput.prototype, "displayName", void 0);
ChangeInformationInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeInformationInput);
exports.ChangeInformationInput = ChangeInformationInput;
let ChangeInformationInputByAdmin = class ChangeInformationInputByAdmin {
};
__decorate([
    (0, class_validator_1.Length)(1, 30),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationInputByAdmin.prototype, "displayName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationInputByAdmin.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 40),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationInputByAdmin.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationInputByAdmin.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationInputByAdmin.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationInputByAdmin.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationInputByAdmin.prototype, "_roleId", void 0);
ChangeInformationInputByAdmin = __decorate([
    (0, graphql_1.InputType)()
], ChangeInformationInputByAdmin);
exports.ChangeInformationInputByAdmin = ChangeInformationInputByAdmin;
let DeleteUserOutput = class DeleteUserOutput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], DeleteUserOutput.prototype, "status", void 0);
DeleteUserOutput = __decorate([
    (0, graphql_1.ObjectType)()
], DeleteUserOutput);
exports.DeleteUserOutput = DeleteUserOutput;
let GetUserByIdInput = class GetUserByIdInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(24, 24),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], GetUserByIdInput.prototype, "_userId", void 0);
GetUserByIdInput = __decorate([
    (0, graphql_1.InputType)()
], GetUserByIdInput);
exports.GetUserByIdInput = GetUserByIdInput;
let ChangeAvatarInput = class ChangeAvatarInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeAvatarInput.prototype, "avatar", void 0);
ChangeAvatarInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeAvatarInput);
exports.ChangeAvatarInput = ChangeAvatarInput;
let ChangeEmailInput = class ChangeEmailInput {
};
__decorate([
    (0, class_validator_1.Length)(0, 40),
    (0, class_validator_1.IsEmail)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeEmailInput.prototype, "newEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeEmailInput.prototype, "password", void 0);
ChangeEmailInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeEmailInput);
exports.ChangeEmailInput = ChangeEmailInput;
//# sourceMappingURL=users.dto.js.map
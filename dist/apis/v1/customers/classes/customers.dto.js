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
exports.ChangeInformationOfCustomerByAdminInput = exports.ChangePasswordOfCustomerByAdminInput = exports.DeleteCustomerInput = exports.CreateCustomerByAdminInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateCustomerByAdminInput = class CreateCustomerByAdminInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CreateCustomerByAdminInput.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 40),
    (0, class_validator_1.IsEmail)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateCustomerByAdminInput.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateCustomerByAdminInput.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateCustomerByAdminInput.prototype, "displayName", void 0);
CreateCustomerByAdminInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCustomerByAdminInput);
exports.CreateCustomerByAdminInput = CreateCustomerByAdminInput;
let DeleteCustomerInput = class DeleteCustomerInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteCustomerInput.prototype, "_id", void 0);
DeleteCustomerInput = __decorate([
    (0, graphql_1.InputType)()
], DeleteCustomerInput);
exports.DeleteCustomerInput = DeleteCustomerInput;
let ChangePasswordOfCustomerByAdminInput = class ChangePasswordOfCustomerByAdminInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangePasswordOfCustomerByAdminInput.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 20),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangePasswordOfCustomerByAdminInput.prototype, "newPassword", void 0);
ChangePasswordOfCustomerByAdminInput = __decorate([
    (0, graphql_1.InputType)()
], ChangePasswordOfCustomerByAdminInput);
exports.ChangePasswordOfCustomerByAdminInput = ChangePasswordOfCustomerByAdminInput;
let ChangeInformationOfCustomerByAdminInput = class ChangeInformationOfCustomerByAdminInput {
};
__decorate([
    (0, class_validator_1.Length)(1, 30),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationOfCustomerByAdminInput.prototype, "displayName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationOfCustomerByAdminInput.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.Length)(0, 40),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChangeInformationOfCustomerByAdminInput.prototype, "email", void 0);
ChangeInformationOfCustomerByAdminInput = __decorate([
    (0, graphql_1.InputType)()
], ChangeInformationOfCustomerByAdminInput);
exports.ChangeInformationOfCustomerByAdminInput = ChangeInformationOfCustomerByAdminInput;
//# sourceMappingURL=customers.dto.js.map
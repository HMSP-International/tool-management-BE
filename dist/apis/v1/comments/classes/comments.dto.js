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
exports.PutChangeCommentInput = exports.DeleteCommentInput = exports.CreateCommentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateCommentInput = class CreateCommentInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(24, 24),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateCommentInput.prototype, "_taskId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateCommentInput.prototype, "content", void 0);
CreateCommentInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCommentInput);
exports.CreateCommentInput = CreateCommentInput;
let DeleteCommentInput = class DeleteCommentInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(24, 24),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], DeleteCommentInput.prototype, "_commentId", void 0);
DeleteCommentInput = __decorate([
    (0, graphql_1.InputType)()
], DeleteCommentInput);
exports.DeleteCommentInput = DeleteCommentInput;
let PutChangeCommentInput = class PutChangeCommentInput {
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(24, 24),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PutChangeCommentInput.prototype, "_commentId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 1000),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], PutChangeCommentInput.prototype, "content", void 0);
PutChangeCommentInput = __decorate([
    (0, graphql_1.InputType)()
], PutChangeCommentInput);
exports.PutChangeCommentInput = PutChangeCommentInput;
//# sourceMappingURL=comments.dto.js.map
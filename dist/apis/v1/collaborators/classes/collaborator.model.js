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
exports.CollaboratorSchema = exports.CollaboratorModel = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const space_model_1 = require("../../spaces/classes/space.model");
const user_model_1 = require("../../users/classes/user.model");
const ObjectId = mongoose.Schema.Types.ObjectId;
let CollaboratorModel = class CollaboratorModel {
};
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, required: true, ref: space_model_1.SpaceModel.name }),
    __metadata("design:type", String)
], CollaboratorModel.prototype, "_workSpaceId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, required: true, ref: user_model_1.UserModel.name }),
    __metadata("design:type", String)
], CollaboratorModel.prototype, "_memberId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, required: true, ref: user_model_1.UserModel.name }),
    __metadata("design:type", String)
], CollaboratorModel.prototype, "_adminId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'member' }),
    __metadata("design:type", String)
], CollaboratorModel.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], CollaboratorModel.prototype, "confirmEmail", void 0);
CollaboratorModel = __decorate([
    (0, mongoose_1.Schema)()
], CollaboratorModel);
exports.CollaboratorModel = CollaboratorModel;
exports.CollaboratorSchema = mongoose_1.SchemaFactory.createForClass(CollaboratorModel);
//# sourceMappingURL=collaborator.model.js.map
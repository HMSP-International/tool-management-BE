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
exports.PaticipantSchema = exports.PaticipantModel = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("../../users/classes/user.model");
const project_model_1 = require("../../projects/classes/project.model");
const collaborator_model_1 = require("../../collaborators/classes/collaborator.model");
const ObjectId = mongoose.Schema.Types.ObjectId;
let PaticipantModel = class PaticipantModel {
};
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, required: true, ref: collaborator_model_1.CollaboratorModel.name }),
    __metadata("design:type", String)
], PaticipantModel.prototype, "_collaboratorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, required: true, ref: project_model_1.ProjectModel.name }),
    __metadata("design:type", String)
], PaticipantModel.prototype, "_projectId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'member' }),
    __metadata("design:type", String)
], PaticipantModel.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, required: true, ref: user_model_1.UserModel.name }),
    __metadata("design:type", String)
], PaticipantModel.prototype, "_memberId", void 0);
PaticipantModel = __decorate([
    (0, mongoose_1.Schema)()
], PaticipantModel);
exports.PaticipantModel = PaticipantModel;
exports.PaticipantSchema = mongoose_1.SchemaFactory.createForClass(PaticipantModel);
//# sourceMappingURL=paticipant.model.js.map
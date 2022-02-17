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
exports.ListSchema = exports.ListModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const project_model_1 = require("../../projects/classes/project.model");
let ListModel = class ListModel {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.SchemaTypes.ObjectId, ref: project_model_1.ProjectModel.name, required: true }),
    __metadata("design:type", String)
], ListModel.prototype, "_projectId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], ListModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], ListModel.prototype, "order", void 0);
ListModel = __decorate([
    (0, mongoose_1.Schema)()
], ListModel);
exports.ListModel = ListModel;
exports.ListSchema = mongoose_1.SchemaFactory.createForClass(ListModel);
//# sourceMappingURL=list.model.js.map
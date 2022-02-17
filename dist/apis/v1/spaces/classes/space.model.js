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
exports.SpaceSchema = exports.SpaceModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_model_1 = require("../../users/classes/user.model");
let SpaceModel = class SpaceModel {
};
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', required: true }),
    __metadata("design:type", String)
], SpaceModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.SchemaTypes.ObjectId, ref: user_model_1.UserModel.name, required: true }),
    __metadata("design:type", String)
], SpaceModel.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], SpaceModel.prototype, "order", void 0);
SpaceModel = __decorate([
    (0, mongoose_1.Schema)()
], SpaceModel);
exports.SpaceModel = SpaceModel;
exports.SpaceSchema = mongoose_1.SchemaFactory.createForClass(SpaceModel);
//# sourceMappingURL=space.model.js.map
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
exports.PermissionSchema = exports.PermissionModel = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const role_model_1 = require("../../roles/classes/role.model");
const ObjectId = mongoose.Schema.Types.ObjectId;
let PermissionModel = class PermissionModel {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], PermissionModel.prototype, "resolverName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, required: true, ref: role_model_1.RoleModel.name }),
    __metadata("design:type", String)
], PermissionModel.prototype, "_roleId", void 0);
PermissionModel = __decorate([
    (0, mongoose_1.Schema)()
], PermissionModel);
exports.PermissionModel = PermissionModel;
exports.PermissionSchema = mongoose_1.SchemaFactory.createForClass(PermissionModel);
//# sourceMappingURL=permission.model.js.map
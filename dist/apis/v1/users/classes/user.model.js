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
exports.UserSchema = exports.UserModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const role_model_1 = require("../../roles/classes/role.model");
const ObjectId = mongoose.Schema.Types.ObjectId;
let UserModel = class UserModel {
};
__decorate([
    (0, mongoose_1.Prop)({ type: 'string' }),
    __metadata("design:type", String)
], UserModel.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', required: true, unique: true }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', required: true }),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', default: 'anonymous' }),
    __metadata("design:type", String)
], UserModel.prototype, "displayName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ObjectId, required: true, ref: role_model_1.RoleModel.name }),
    __metadata("design:type", String)
], UserModel.prototype, "_roleId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', default: 'anonymous' }),
    __metadata("design:type", String)
], UserModel.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', default: 'anonymous' }),
    __metadata("design:type", String)
], UserModel.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'string', default: 'anonymous' }),
    __metadata("design:type", String)
], UserModel.prototype, "title", void 0);
UserModel = __decorate([
    (0, mongoose_1.Schema)()
], UserModel);
exports.UserModel = UserModel;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserModel);
exports.UserSchema.pre('save', function (next) {
    if (this.password) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err)
                return next(err);
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err)
                    return next(err);
                this.password = hash;
                next();
            });
        });
    }
});
//# sourceMappingURL=user.model.js.map
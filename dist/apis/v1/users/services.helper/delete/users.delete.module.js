"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDeleteModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collaborators_module_1 = require("../../../collaborators/collaborators.module");
const cloudinary_module_1 = require("../../../../../helpers/modules/cloudinary/cloudinary.module");
const user_model_1 = require("../../classes/user.model");
const users_delete_service_1 = require("./users.delete.service");
const paticipants_module_1 = require("../../../paticipants/paticipants.module");
let UsersDeleteModule = class UsersDeleteModule {
};
UsersDeleteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_model_1.UserModel.name, schema: user_model_1.UserSchema }]),
            (0, common_1.forwardRef)(() => cloudinary_module_1.CloudinaryModule),
            (0, common_1.forwardRef)(() => collaborators_module_1.CollaboratorsModule),
            (0, common_1.forwardRef)(() => paticipants_module_1.PaticipantsModule),
        ],
        providers: [users_delete_service_1.UsersDeleteService],
        exports: [users_delete_service_1.UsersDeleteService],
    })
], UsersDeleteModule);
exports.UsersDeleteModule = UsersDeleteModule;
//# sourceMappingURL=users.delete.module.js.map
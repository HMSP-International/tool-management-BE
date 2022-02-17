"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCreateModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("../../classes/user.model");
const users_create_service_1 = require("./users.create.service");
const users_find_module_1 = require("../find/users.find.module");
const roles_module_1 = require("../../../roles/roles.module");
const cloudinary_module_1 = require("../../../../../helpers/modules/cloudinary/cloudinary.module");
const senders_module_1 = require("../../../../../helpers/modules/senders/senders.module");
let UsersCreateModule = class UsersCreateModule {
};
UsersCreateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_model_1.UserModel.name, schema: user_model_1.UserSchema }]),
            users_find_module_1.UsersFindModule,
            roles_module_1.RolesModule,
            cloudinary_module_1.CloudinaryModule,
            senders_module_1.SendersModule,
        ],
        providers: [users_create_service_1.UsersCreateService],
        exports: [users_create_service_1.UsersCreateService],
    })
], UsersCreateModule);
exports.UsersCreateModule = UsersCreateModule;
//# sourceMappingURL=users.create.module.js.map
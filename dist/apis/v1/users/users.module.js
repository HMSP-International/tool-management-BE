"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_resolver_1 = require("./users.resolver");
const users_create_module_1 = require("./services.helper/create/users.create.module");
const users_delete_module_1 = require("./services.helper/delete/users.delete.module");
const users_find_module_1 = require("./services.helper/find/users.find.module");
const users_put_module_1 = require("./services.helper/put/users.put.module");
const permissions_module_1 = require("../permissions/permissions.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [users_create_module_1.UsersCreateModule, users_delete_module_1.UsersDeleteModule, users_find_module_1.UsersFindModule, users_put_module_1.UsersPutModule, permissions_module_1.PermissionsModule],
        providers: [users_resolver_1.UsersResolver, users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map
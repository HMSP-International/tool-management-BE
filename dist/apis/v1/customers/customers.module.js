"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersModule = void 0;
const common_1 = require("@nestjs/common");
const customers_service_1 = require("./customers.service");
const customers_resolver_1 = require("./customers.resolver");
const customers_create_module_1 = require("./services.helper/create/customers.create.module");
const customers_delete_module_1 = require("./services.helper/delete/customers.delete.module");
const customers_find_module_1 = require("./services.helper/find/customers.find.module");
const customers_put_module_1 = require("./services.helper/put/customers.put.module");
const permissions_module_1 = require("../permissions/permissions.module");
let CustomersModule = class CustomersModule {
};
CustomersModule = __decorate([
    (0, common_1.Module)({
        imports: [customers_create_module_1.CustomersCreateModule, customers_delete_module_1.CustomersDeleteModule, customers_find_module_1.CustomersFindModule, customers_put_module_1.CustomersPutModule, permissions_module_1.PermissionsModule],
        providers: [customers_resolver_1.CustomersResolver, customers_service_1.CustomersService],
        exports: [customers_service_1.CustomersService],
    })
], CustomersModule);
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=customers.module.js.map
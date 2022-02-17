"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsModule = void 0;
const common_1 = require("@nestjs/common");
const lists_service_1 = require("./lists.service");
const lists_resolver_1 = require("./lists.resolver");
const lists_create_module_1 = require("./services.helper/create/lists.create.module");
const lists_find_module_1 = require("./services.helper/find/lists.find.module");
const lists_delete_module_1 = require("./services.helper/delete/lists.delete.module");
const lists_put_module_1 = require("./services.helper/put/lists.put.module");
let ListsModule = class ListsModule {
};
ListsModule = __decorate([
    (0, common_1.Module)({
        imports: [lists_create_module_1.ListsCreateModule, lists_delete_module_1.ListsDeleteModule, lists_find_module_1.ListsFindModule, lists_put_module_1.ListsPutModule],
        providers: [lists_resolver_1.ListsResolver, lists_service_1.ListsService],
        exports: [lists_service_1.ListsService],
    })
], ListsModule);
exports.ListsModule = ListsModule;
//# sourceMappingURL=lists.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpacesModule = void 0;
const common_1 = require("@nestjs/common");
const spaces_service_1 = require("./spaces.service");
const spaces_resolver_1 = require("./spaces.resolver");
const spaces_create_module_1 = require("./services.helper/create/spaces.create.module");
const spaces_delete_module_1 = require("./services.helper/delete/spaces.delete.module");
const spaces_find_module_1 = require("./services.helper/find/spaces.find.module");
const spaces_put_module_1 = require("./services.helper/put/spaces.put.module");
let SpacesModule = class SpacesModule {
};
SpacesModule = __decorate([
    (0, common_1.Module)({
        imports: [spaces_create_module_1.SpacesCreateModule, spaces_delete_module_1.SpacesDeleteModule, spaces_find_module_1.SpacesFindModule, spaces_put_module_1.SpacesPutModule],
        providers: [spaces_resolver_1.SpacesResolver, spaces_service_1.SpacesService],
        exports: [spaces_service_1.SpacesService],
    })
], SpacesModule);
exports.SpacesModule = SpacesModule;
//# sourceMappingURL=spaces.module.js.map
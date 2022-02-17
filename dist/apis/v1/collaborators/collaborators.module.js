"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorsModule = void 0;
const common_1 = require("@nestjs/common");
const collaborators_service_1 = require("./collaborators.service");
const collaborators_resolver_1 = require("./collaborators.resolver");
const collaborators_resolveField_module_1 = require("./services.helper/resolveField/collaborators.resolveField.module");
const collaborators_find_module_1 = require("./services.helper/find/collaborators.find.module");
const collaborators_create_module_1 = require("./services.helper/create/collaborators.create.module");
const collaborators_delete_module_1 = require("./services.helper/delete/collaborators.delete.module");
let CollaboratorsModule = class CollaboratorsModule {
};
CollaboratorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            collaborators_create_module_1.CollaboratorsCreateModule,
            collaborators_delete_module_1.CollaboratorsDeleteModule,
            collaborators_find_module_1.CollaboratorsFindModule,
            collaborators_resolveField_module_1.CollaboratorsResolverFieldModule,
        ],
        providers: [collaborators_resolver_1.CollaboratorsResolver, collaborators_service_1.CollaboratorsService],
        exports: [collaborators_service_1.CollaboratorsService],
    })
], CollaboratorsModule);
exports.CollaboratorsModule = CollaboratorsModule;
//# sourceMappingURL=collaborators.module.js.map
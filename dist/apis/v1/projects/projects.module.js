"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const projects_resolver_1 = require("./projects.resolver");
const projects_create_module_1 = require("./services.helper/create/projects.create.module");
const projects_find_module_1 = require("./services.helper/find/projects.find.module");
const projects_delete_module_1 = require("./services.helper/delete/projects.delete.module");
const projects_put_module_1 = require("./services.helper/put/projects.put.module");
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [projects_create_module_1.ProjectsCreateModule, projects_delete_module_1.ProjectsDeleteModule, projects_find_module_1.ProjectsFindModule, projects_put_module_1.ProjectsPutModule],
        providers: [projects_resolver_1.ProjectsResolver, projects_service_1.ProjectsService],
        exports: [projects_service_1.ProjectsService],
    })
], ProjectsModule);
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map
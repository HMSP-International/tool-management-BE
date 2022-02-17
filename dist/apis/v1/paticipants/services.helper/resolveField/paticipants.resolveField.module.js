"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsResolverFieldModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("../../../users/users.module");
const collaborators_module_1 = require("../../../collaborators/collaborators.module");
const projects_module_1 = require("../../../projects/projects.module");
const paticipants_resolveField_service_1 = require("./paticipants.resolveField.service");
let PaticipantsResolverFieldModule = class PaticipantsResolverFieldModule {
};
PaticipantsResolverFieldModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => collaborators_module_1.CollaboratorsModule), (0, common_1.forwardRef)(() => projects_module_1.ProjectsModule), (0, common_1.forwardRef)(() => users_module_1.UsersModule)],
        providers: [paticipants_resolveField_service_1.PaticipantsResolverFieldService],
        exports: [paticipants_resolveField_service_1.PaticipantsResolverFieldService],
    })
], PaticipantsResolverFieldModule);
exports.PaticipantsResolverFieldModule = PaticipantsResolverFieldModule;
//# sourceMappingURL=paticipants.resolveField.module.js.map
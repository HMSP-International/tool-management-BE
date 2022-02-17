"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../apis/v1/auth/auth.module");
const collaborators_module_1 = require("../apis/v1/collaborators/collaborators.module");
const comments_module_1 = require("../apis/v1/comments/comments.module");
const customers_module_1 = require("../apis/v1/customers/customers.module");
const lists_module_1 = require("../apis/v1/lists/lists.module");
const paticipants_module_1 = require("../apis/v1/paticipants/paticipants.module");
const permissions_module_1 = require("../apis/v1/permissions/permissions.module");
const projects_module_1 = require("../apis/v1/projects/projects.module");
const roles_module_1 = require("../apis/v1/roles/roles.module");
const spaces_module_1 = require("../apis/v1/spaces/spaces.module");
const tasks_module_1 = require("../apis/v1/tasks/tasks.module");
const users_module_1 = require("../apis/v1/users/users.module");
let FeaturesModule = class FeaturesModule {
    configure() { }
};
FeaturesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            collaborators_module_1.CollaboratorsModule,
            comments_module_1.CommentsModule,
            customers_module_1.CustomersModule,
            lists_module_1.ListsModule,
            paticipants_module_1.PaticipantsModule,
            permissions_module_1.PermissionsModule,
            projects_module_1.ProjectsModule,
            roles_module_1.RolesModule,
            spaces_module_1.SpacesModule,
            tasks_module_1.TasksModule,
            users_module_1.UsersModule,
        ],
    })
], FeaturesModule);
exports.FeaturesModule = FeaturesModule;
//# sourceMappingURL=features.module.js.map
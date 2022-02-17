"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsCreateModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_module_1 = require("../../../users/users.module");
const collaborators_module_1 = require("../../../collaborators/collaborators.module");
const projects_module_1 = require("../../../projects/projects.module");
const paticipant_model_1 = require("../../classes/paticipant.model");
const paticipants_create_service_1 = require("./paticipants.create.service");
let PaticipantsCreateModule = class PaticipantsCreateModule {
};
PaticipantsCreateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: paticipant_model_1.PaticipantModel.name, schema: paticipant_model_1.PaticipantSchema }]),
            (0, common_1.forwardRef)(() => projects_module_1.ProjectsModule),
            (0, common_1.forwardRef)(() => collaborators_module_1.CollaboratorsModule),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        providers: [paticipants_create_service_1.PaticipantsCreateService],
        exports: [paticipants_create_service_1.PaticipantsCreateService],
    })
], PaticipantsCreateModule);
exports.PaticipantsCreateModule = PaticipantsCreateModule;
//# sourceMappingURL=paticipants.create.module.js.map
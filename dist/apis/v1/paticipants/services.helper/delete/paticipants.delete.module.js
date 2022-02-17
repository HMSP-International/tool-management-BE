"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsDeleteModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const projects_module_1 = require("../../../projects/projects.module");
const collaborators_module_1 = require("../../../collaborators/collaborators.module");
const paticipant_model_1 = require("../../classes/paticipant.model");
const paticipants_delete_service_1 = require("./paticipants.delete.service");
let PaticipantsDeleteModule = class PaticipantsDeleteModule {
};
PaticipantsDeleteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: paticipant_model_1.PaticipantModel.name, schema: paticipant_model_1.PaticipantSchema }]),
            (0, common_1.forwardRef)(() => collaborators_module_1.CollaboratorsModule),
            (0, common_1.forwardRef)(() => projects_module_1.ProjectsModule),
        ],
        providers: [paticipants_delete_service_1.PaticipantsDeleteService],
        exports: [paticipants_delete_service_1.PaticipantsDeleteService],
    })
], PaticipantsDeleteModule);
exports.PaticipantsDeleteModule = PaticipantsDeleteModule;
//# sourceMappingURL=paticipants.delete.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorsDeleteModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collaborator_model_1 = require("../../classes/collaborator.model");
const paticipants_module_1 = require("../../../paticipants/paticipants.module");
const collaborators_delete_service_1 = require("./collaborators.delete.service");
let CollaboratorsDeleteModule = class CollaboratorsDeleteModule {
};
CollaboratorsDeleteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: collaborator_model_1.CollaboratorModel.name, schema: collaborator_model_1.CollaboratorSchema }]),
            (0, common_1.forwardRef)(() => paticipants_module_1.PaticipantsModule),
        ],
        providers: [collaborators_delete_service_1.CollaboratorsDeleteService],
        exports: [collaborators_delete_service_1.CollaboratorsDeleteService],
    })
], CollaboratorsDeleteModule);
exports.CollaboratorsDeleteModule = CollaboratorsDeleteModule;
//# sourceMappingURL=collaborators.delete.module.js.map
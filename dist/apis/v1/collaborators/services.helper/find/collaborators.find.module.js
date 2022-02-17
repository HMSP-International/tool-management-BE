"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorsFindModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collaborator_model_1 = require("../../classes/collaborator.model");
const collaborators_find_service_1 = require("./collaborators.find.service");
let CollaboratorsFindModule = class CollaboratorsFindModule {
};
CollaboratorsFindModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: collaborator_model_1.CollaboratorModel.name, schema: collaborator_model_1.CollaboratorSchema }])],
        providers: [collaborators_find_service_1.CollaboratorsFindService],
        exports: [collaborators_find_service_1.CollaboratorsFindService],
    })
], CollaboratorsFindModule);
exports.CollaboratorsFindModule = CollaboratorsFindModule;
//# sourceMappingURL=collaborators.find.module.js.map
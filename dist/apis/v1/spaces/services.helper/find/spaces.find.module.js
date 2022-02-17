"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpacesFindModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const collaborators_module_1 = require("../../../collaborators/collaborators.module");
const space_model_1 = require("../../classes/space.model");
const spaces_find_service_1 = require("./spaces.find.service");
let SpacesFindModule = class SpacesFindModule {
};
SpacesFindModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: space_model_1.SpaceModel.name, schema: space_model_1.SpaceSchema }]),
            (0, common_1.forwardRef)(() => collaborators_module_1.CollaboratorsModule),
        ],
        providers: [spaces_find_service_1.SpacesFindService],
        exports: [spaces_find_service_1.SpacesFindService],
    })
], SpacesFindModule);
exports.SpacesFindModule = SpacesFindModule;
//# sourceMappingURL=spaces.find.module.js.map
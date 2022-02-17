"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollaboratorsCreateModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const senders_module_1 = require("../../../../../helpers/modules/senders/senders.module");
const collaborators_find_module_1 = require("../find/collaborators.find.module");
const collaborator_model_1 = require("../../classes/collaborator.model");
const users_module_1 = require("../../../users/users.module");
const collaborators_create_service_1 = require("./collaborators.create.service");
let CollaboratorsCreateModule = class CollaboratorsCreateModule {
};
CollaboratorsCreateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: collaborator_model_1.CollaboratorModel.name, schema: collaborator_model_1.CollaboratorSchema }]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            collaborators_find_module_1.CollaboratorsFindModule,
            senders_module_1.SendersModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        secret: configService.get('sendGrid.jwt.secret'),
                        signOptions: { expiresIn: configService.get('sendGrid.jwt.expiresIn') },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [collaborators_create_service_1.CollaboratorsCreateService],
        exports: [collaborators_create_service_1.CollaboratorsCreateService],
    })
], CollaboratorsCreateModule);
exports.CollaboratorsCreateModule = CollaboratorsCreateModule;
//# sourceMappingURL=collaborators.create.module.js.map
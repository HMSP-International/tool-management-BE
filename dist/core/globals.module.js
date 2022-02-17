"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoresModule = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const compression = require("compression");
const jwt_middleware_1 = require("../common/middleware/jwt.middleware");
const configuration_1 = require("../common/config/configuration");
let CoresModule = class CoresModule {
    configure(consumer) {
        consumer
            .apply(compression(), jwt_middleware_1.JwtMiddleware)
            .forRoutes({ path: 'graphql', method: common_1.RequestMethod.POST })
            .apply(compression(), jwt_middleware_1.JwtMiddleware)
            .forRoutes({ path: '*', method: common_1.RequestMethod.GET });
    }
};
CoresModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        uri: configService.get('db.mongodb.host'),
                    };
                },
                inject: [config_1.ConfigService],
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'schema.gql'),
                sortSchema: true,
                formatError: (e) => {
                    var _a, _b;
                    const graphQLFormattedError = {
                        message: e.message,
                        extensions: (_b = (_a = e.extensions) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.message,
                    };
                    return graphQLFormattedError;
                },
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {
                        secret: configService.get('jwt.secret'),
                        signOptions: { expiresIn: configService.get('jwt.expiresIn') },
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [config_1.ConfigModule, jwt_1.JwtModule],
    })
], CoresModule);
exports.CoresModule = CoresModule;
//# sourceMappingURL=globals.module.js.map
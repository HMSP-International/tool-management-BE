"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaticipantsModule = void 0;
const common_1 = require("@nestjs/common");
const paticipants_service_1 = require("./paticipants.service");
const paticipants_resolver_1 = require("./paticipants.resolver");
const paticipants_create_module_1 = require("./services.helper/create/paticipants.create.module");
const paticipants_delete_module_1 = require("./services.helper/delete/paticipants.delete.module");
const paticipants_find_module_1 = require("./services.helper/find/paticipants.find.module");
const paticipants_put_module_1 = require("./services.helper/put/paticipants.put.module");
const paticipants_resolveField_module_1 = require("./services.helper/resolveField/paticipants.resolveField.module");
let PaticipantsModule = class PaticipantsModule {
};
PaticipantsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            paticipants_create_module_1.PaticipantsCreateModule,
            paticipants_delete_module_1.PaticipantsDeleteModule,
            paticipants_find_module_1.PaticipantsFindModule,
            paticipants_put_module_1.PaticipantsPutModule,
            paticipants_resolveField_module_1.PaticipantsResolverFieldModule,
        ],
        providers: [paticipants_resolver_1.PaticipantsResolver, paticipants_service_1.PaticipantsService],
        exports: [paticipants_service_1.PaticipantsService],
    })
], PaticipantsModule);
exports.PaticipantsModule = PaticipantsModule;
//# sourceMappingURL=paticipants.module.js.map
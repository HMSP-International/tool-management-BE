"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersPutModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const customers_put_service_1 = require("./customers.put.service");
const customers_model_1 = require("../../classes/customers.model");
let CustomersPutModule = class CustomersPutModule {
};
CustomersPutModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: customers_model_1.CustomerModel.name, schema: customers_model_1.CustomerSchema }])],
        providers: [customers_put_service_1.CustomersPutService],
        exports: [customers_put_service_1.CustomersPutService],
    })
], CustomersPutModule);
exports.CustomersPutModule = CustomersPutModule;
//# sourceMappingURL=customers.put.module.js.map
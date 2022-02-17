"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersDeleteModule = void 0;
const customers_delete_service_1 = require("./customers.delete.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cloudinary_module_1 = require("../../../../../helpers/modules/cloudinary/cloudinary.module");
const customers_model_1 = require("../../classes/customers.model");
let CustomersDeleteModule = class CustomersDeleteModule {
};
CustomersDeleteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: customers_model_1.CustomerModel.name, schema: customers_model_1.CustomerSchema }]),
            (0, common_1.forwardRef)(() => cloudinary_module_1.CloudinaryModule),
        ],
        providers: [customers_delete_service_1.CustomersDeleteService],
        exports: [customers_delete_service_1.CustomersDeleteService],
    })
], CustomersDeleteModule);
exports.CustomersDeleteModule = CustomersDeleteModule;
//# sourceMappingURL=customers.delete.module.js.map
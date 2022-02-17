"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
const customers_put_service_1 = require("./services.helper/put/customers.put.service");
const customers_find_service_1 = require("./services.helper/find/customers.find.service");
const customers_delete_service_1 = require("./services.helper/delete/customers.delete.service");
const customers_create_service_1 = require("./services.helper/create/customers.create.service");
let CustomersService = class CustomersService {
    constructor(customersCreateService, customersDeleteService, customersPutService, customersFindService) {
        this.customersCreateService = customersCreateService;
        this.customersDeleteService = customersDeleteService;
        this.customersPutService = customersPutService;
        this.customersFindService = customersFindService;
    }
    async createCustomerByAdmin(createUserInput) {
        return await this.customersCreateService.createCustomerByAdmin(createUserInput);
    }
    async deleteById(_id) {
        return await this.customersDeleteService.deleteById(_id);
    }
    async findAll() {
        return this.customersFindService.findAll();
    }
    async changePasswordOfCustomerByAdmin(changePasswordInputByAdmin, user) {
        return await this.customersPutService.changePasswordOfCustomerByAdmin(changePasswordInputByAdmin, user);
    }
    async changeInformationOfCustomerByAdmin(changeInformationInputByAdmin, user) {
        return await this.customersPutService.changeInformationOfCustomerByAdmin(changeInformationInputByAdmin, user);
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customers_create_service_1.CustomersCreateService,
        customers_delete_service_1.CustomersDeleteService,
        customers_put_service_1.CustomersPutService,
        customers_find_service_1.CustomersFindService])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map
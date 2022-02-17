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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersResolver = void 0;
const CustomerDto = require("./classes/customers.dto");
const customers_entity_1 = require("./classes/customers.entity");
const customers_service_1 = require("./customers.service");
const graphql_1 = require("@nestjs/graphql");
const permissions_decorator_1 = require("../../../common/decorator/permissions.decorator");
const CurrentUser_decorator_1 = require("../../../common/decorator/CurrentUser.decorator");
const token_interface_1 = require("../../../helpers/modules/token/token.interface");
let CustomersResolver = class CustomersResolver {
    constructor(customersService) {
        this.customersService = customersService;
    }
    async getCustomers() {
        return this.customersService.findAll();
    }
    async createCustomerByAdmin(createCustomerByAdmin) {
        return this.customersService.createCustomerByAdmin(createCustomerByAdmin);
    }
    async chagePasswordOfCustomerByAdmin(changePasswordOfCustomerByAdmin, user) {
        return this.customersService.changePasswordOfCustomerByAdmin(changePasswordOfCustomerByAdmin, user);
    }
    async chageInformationOfCustomerByAdmin(changeInformationOfCustomerByAdmin, user) {
        return this.customersService.changeInformationOfCustomerByAdmin(changeInformationOfCustomerByAdmin, user);
    }
    async deleteCustomer(deleteCustomer) {
        return this.customersService.deleteById(deleteCustomer._id);
    }
};
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'getCustomers' }),
    (0, graphql_1.Mutation)(() => [customers_entity_1.Customer]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "getCustomers", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'createCustomerByAdminInput' }),
    (0, graphql_1.Mutation)(() => customers_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('createCustomerByAdminInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerDto.CreateCustomerByAdminInput]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "createCustomerByAdmin", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'chagePasswordOfCustomerByAdmin' }),
    (0, graphql_1.Mutation)(() => customers_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('changePasswordOfCustomerByAdminInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerDto.ChangePasswordOfCustomerByAdminInput, Object]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "chagePasswordOfCustomerByAdmin", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'chageInformationOfCustomerByAdmin' }),
    (0, graphql_1.Mutation)(() => customers_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('changeInformationOfCustomerByAdminInput')),
    __param(1, (0, CurrentUser_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerDto.ChangeInformationOfCustomerByAdminInput, Object]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "chageInformationOfCustomerByAdmin", null);
__decorate([
    (0, permissions_decorator_1.PERMISSIONS)({ resolverName: 'deleteCustomer' }),
    (0, graphql_1.Mutation)(() => customers_entity_1.Customer),
    __param(0, (0, graphql_1.Args)('deleteCustomerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerDto.DeleteCustomerInput]),
    __metadata("design:returntype", Promise)
], CustomersResolver.prototype, "deleteCustomer", null);
CustomersResolver = __decorate([
    (0, graphql_1.Resolver)(() => customers_entity_1.Customer),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersResolver);
exports.CustomersResolver = CustomersResolver;
//# sourceMappingURL=customers.resolver.js.map
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
exports.CustomersPutService = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const customers_model_1 = require("../../classes/customers.model");
let CustomersPutService = class CustomersPutService {
    constructor(customerEntity) {
        this.customerEntity = customerEntity;
    }
    async changePasswordOfCustomerByAdmin(changePasswordInputByAdmin, user) {
        const { newPassword, _id } = changePasswordInputByAdmin;
        const customer = await this.customerEntity.findById(_id);
        if (!customer)
            throw new common_1.NotFoundException('This customer not found');
        customer.password = newPassword;
        return await customer.save();
    }
    async changeInformationOfCustomerByAdmin(changeInformationInputByAdmin, user) {
        const { _id } = changeInformationInputByAdmin;
        delete changeInformationInputByAdmin._id;
        const isExistsEmail = await this.customerEntity.findOne({
            $and: [{ email: changeInformationInputByAdmin.email }, { _id: { $ne: _id } }],
        });
        if (isExistsEmail)
            throw new common_1.NotFoundException('Email already exists');
        let customer = await this.customerEntity.findByIdAndUpdate(_id, changeInformationInputByAdmin, {
            new: true,
        });
        if (!customer)
            throw new common_1.NotFoundException('This customer not found');
        return customer;
    }
};
CustomersPutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(customers_model_1.CustomerModel.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CustomersPutService);
exports.CustomersPutService = CustomersPutService;
//# sourceMappingURL=customers.put.service.js.map
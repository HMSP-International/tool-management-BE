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
exports.CustomersCreateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const customers_model_1 = require("../../classes/customers.model");
const customers_find_service_1 = require("../find/customers.find.service");
const cloudinary_service_1 = require("../../../../../helpers/modules/cloudinary/cloudinary.service");
let CustomersCreateService = class CustomersCreateService {
    constructor(userEntity, customersFindService, cloudinary) {
        this.userEntity = userEntity;
        this.customersFindService = customersFindService;
        this.cloudinary = cloudinary;
    }
    async createCustomerByAdmin(createCustomerInput) {
        {
            const customer = await this.customersFindService.findByEmail(createCustomerInput.email);
            if (customer)
                throw new common_1.HttpException('Email Already Exists', common_1.HttpStatus.CONFLICT);
        }
        {
            const public_id = await this.cloudinary.uploadImageCustomer(createCustomerInput.avatar);
            createCustomerInput.avatar = public_id;
            const newUser = await new this.userEntity(createCustomerInput).save();
            newUser.password = null;
            return newUser;
        }
    }
};
CustomersCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(customers_model_1.CustomerModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        customers_find_service_1.CustomersFindService,
        cloudinary_service_1.CloudinaryService])
], CustomersCreateService);
exports.CustomersCreateService = CustomersCreateService;
//# sourceMappingURL=customers.create.service.js.map
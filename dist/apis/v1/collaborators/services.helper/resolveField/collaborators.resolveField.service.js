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
exports.CollaboratorsResolverFieldService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../../users/users.service");
const spaces_service_1 = require("../../../spaces/spaces.service");
let CollaboratorsResolverFieldService = class CollaboratorsResolverFieldService {
    constructor(usersService, spacesService) {
        this.usersService = usersService;
        this.spacesService = spacesService;
    }
    async getSpace(_id) {
        return await this.spacesService.findById(_id);
    }
    async getUser(_id) {
        const user = await this.usersService.findById(_id);
        if (user === null)
            throw new common_1.HttpException('_id user not found', common_1.HttpStatus.BAD_REQUEST);
        return user;
    }
};
CollaboratorsResolverFieldService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        spaces_service_1.SpacesService])
], CollaboratorsResolverFieldService);
exports.CollaboratorsResolverFieldService = CollaboratorsResolverFieldService;
//# sourceMappingURL=collaborators.resolveField.service.js.map
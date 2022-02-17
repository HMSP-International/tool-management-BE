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
exports.CollaboratorsCreateService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const collaborator_model_1 = require("../../classes/collaborator.model");
const token_interface_1 = require("../../../../../helpers/modules/token/token.interface");
const collaborators_find_service_1 = require("../find/collaborators.find.service");
const users_service_1 = require("../../../users/users.service");
let CollaboratorsCreateService = class CollaboratorsCreateService {
    constructor(collaboratorEntity, usersService, collaboratorsFindService, jwtService) {
        this.collaboratorEntity = collaboratorEntity;
        this.usersService = usersService;
        this.collaboratorsFindService = collaboratorsFindService;
        this.jwtService = jwtService;
        this.inviteSpace = async (createCollaboratorInput, user) => {
            try {
                const { _workSpaceId, _memberId } = createCollaboratorInput;
                const { _id: _adminId } = user;
                let collaborator = await this.collaboratorsFindService.findOneByInvitedSpace(_adminId, _memberId, _workSpaceId);
                const adminExists = this.usersService.findById(_adminId);
                const memberExists = this.usersService.findById(_memberId);
                const [admin, member] = await Promise.all([adminExists, memberExists]);
                if (!admin)
                    throw new common_1.HttpException('Not Found Admin User', common_1.HttpStatus.BAD_REQUEST);
                if (!member)
                    throw new common_1.HttpException('Not Found Member User', common_1.HttpStatus.BAD_REQUEST);
                if (collaborator === null) {
                    const newCollaborator = new this.collaboratorEntity(Object.assign(Object.assign({}, createCollaboratorInput), { _adminId }));
                    collaborator = await newCollaborator.save();
                }
                return collaborator;
            }
            catch (error) {
                throw new Error(error);
            }
        };
        this.verifyInviteSpace = async (token) => {
            const decoded = await this.jwtService.verify(token.jwt);
            const { _id } = decoded;
            const collaborator = await this.collaboratorEntity.findById(_id);
            if (!collaborator)
                throw new common_1.HttpException('Invalid Link or expired', common_1.HttpStatus.BAD_REQUEST);
            if (collaborator.confirmEmail === true) {
                throw new common_1.HttpException('You have already confirmed this link', common_1.HttpStatus.BAD_REQUEST);
            }
            collaborator.confirmEmail = true;
            return await collaborator.save();
        };
    }
};
CollaboratorsCreateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(collaborator_model_1.CollaboratorModel.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService,
        collaborators_find_service_1.CollaboratorsFindService,
        jwt_1.JwtService])
], CollaboratorsCreateService);
exports.CollaboratorsCreateService = CollaboratorsCreateService;
//# sourceMappingURL=collaborators.create.service.js.map
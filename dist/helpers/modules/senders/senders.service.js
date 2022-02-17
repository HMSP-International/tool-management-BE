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
exports.SendersService = void 0;
const common_1 = require("@nestjs/common");
const senderFactory_1 = require("./factoryPattern/senderFactory");
const config_1 = require("@nestjs/config");
let SendersService = class SendersService {
    constructor(senderFactoryService, configService) {
        this.senderFactoryService = senderFactoryService;
        this.configService = configService;
        this.sendInviteSpaceByGrid = async (inputSendGridInviteSpace) => {
            try {
                const sendGrid = this.senderFactoryService.sender('sendGrid');
                const from = `HMSP <${this.configService.get('sendGrid.customerEmail')}>`;
                const apiKey = this.configService.get('sendGrid.apiKey');
                const frontEndHost = this.configService.get('FE.host');
                sendGrid.setFrom(from);
                sendGrid.setApiKey(apiKey);
                sendGrid.setFEHost(frontEndHost);
                sendGrid.inviteSpace(inputSendGridInviteSpace);
                return true;
            }
            catch (error) {
                throw new Error(error.message);
            }
        };
        this.sendCreateUser = async (inputSendGridInviteSpace) => {
            try {
                const sendGrid = this.senderFactoryService.sender('sendGrid');
                const from = `HMSP <${this.configService.get('sendGrid.customerEmail')}>`;
                const apiKey = this.configService.get('sendGrid.apiKey');
                const frontEndHost = this.configService.get('FE.host');
                sendGrid.setFrom(from);
                sendGrid.setApiKey(apiKey);
                sendGrid.setFEHost(frontEndHost);
                sendGrid.createUser(inputSendGridInviteSpace);
                return true;
            }
            catch (error) {
                throw new Error(error.message);
            }
        };
    }
};
SendersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [senderFactory_1.SenderFactoryService,
        config_1.ConfigService])
], SendersService);
exports.SendersService = SendersService;
//# sourceMappingURL=senders.service.js.map
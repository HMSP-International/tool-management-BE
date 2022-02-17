"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderFactoryModule = exports.SenderFactoryService = void 0;
const sendGrid_1 = require("./sendGrid");
const common_1 = require("@nestjs/common");
const mail_1 = require("@sendgrid/mail");
class SenderFactoryService {
    sender(sender) {
        if (sender === 'sendGrid') {
            const sendGrid = new mail_1.MailService();
            return new sendGrid_1.SendGridService(sendGrid);
        }
    }
}
exports.SenderFactoryService = SenderFactoryService;
let SenderFactoryModule = class SenderFactoryModule {
};
SenderFactoryModule = __decorate([
    (0, common_1.Module)({
        providers: [SenderFactoryService],
        exports: [SenderFactoryService],
    })
], SenderFactoryModule);
exports.SenderFactoryModule = SenderFactoryModule;
//# sourceMappingURL=senderFactory.js.map
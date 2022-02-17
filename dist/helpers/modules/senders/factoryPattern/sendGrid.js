"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendGridModule = exports.SendGridService = void 0;
const common_1 = require("@nestjs/common");
class SendGridService {
    constructor(sendGrid) {
        this.inviteSpace = async (inputSendGridInviteSpace) => {
            try {
                const { token, email } = inputSendGridInviteSpace;
                const textMessage = `
				Hi ,\r\n
				Click the link below to verify my invite:\r\n
				Link: ${this.data.frontendHost}/verify/inviteSpace?token=${token}.\r\n
				You can ignore this if you didn't make this request.
			`;
                const htmlMessage = `
				Hi,<br/>
				Click the link below to verify my invite.<br/>
				<a href="${this.data.frontendHost}/verify/inviteSpace?token=${token}">Click this link to verifyl</a><br/>
				<strong>Didn't make this request?</strong><br/>
				You can ignore this if you didn't make this request.
			`;
                try {
                    await this.setReceiver(email)
                        .setSubject('HMSP - Invite Verification')
                        .setHtml(htmlMessage)
                        .setText(textMessage)
                        .send();
                }
                catch (error) {
                    throw new Error(error.message);
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        };
        this.createUser = async (inputSendGridInviteSpace) => {
            try {
                const { password, email } = inputSendGridInviteSpace;
                const textMessage = `
				Hi ,\r\n
				Click the link below to login:\r\n
				Link: ${this.data.frontendHost}.\r\n\
				Please change password when you login
			`;
                const htmlMessage = `
				Hi,<br/>
				Click the link below to login.<br/>
				<a href="${this.data.frontendHost}">Click this link to login</a><br/>
				<h1>email: ${email}</h1>
				<h1>password: ${password}</h1>
				<h3>Please change password when you login</h3>
			`;
                try {
                    await this.setReceiver(email)
                        .setSubject('HMSP - New Member')
                        .setHtml(htmlMessage)
                        .setText(textMessage)
                        .send();
                }
                catch (error) {
                    throw new Error(error.message);
                }
            }
            catch (error) {
                throw new Error(error.message);
            }
        };
        this.data = {
            sendGrid,
            to: '',
            from: '',
            subject: '',
            text: '',
            html: '',
            frontendHost: '',
        };
    }
    getData() {
        console.log(this.data);
    }
    setApiKey(apiKey) {
        this.data.sendGrid.setApiKey(apiKey);
        return this;
    }
    setFEHost(host) {
        this.data.frontendHost = host;
        return this;
    }
    setReceiver(mail) {
        this.data.to = mail;
        return this;
    }
    setSubject(subject) {
        this.data.subject = subject;
        return this;
    }
    setText(text) {
        this.data.text = text;
        return this;
    }
    setHtml(htmlString) {
        this.data.html = htmlString;
        return this;
    }
    setFrom(from) {
        this.data.from = from;
        return this;
    }
    async send() {
        try {
            const mail = await this.data.sendGrid.send(this.data);
            return mail;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.SendGridService = SendGridService;
let SendGridModule = class SendGridModule {
};
SendGridModule = __decorate([
    (0, common_1.Module)({
        providers: [SendGridService],
        exports: [SendGridService],
    })
], SendGridModule);
exports.SendGridModule = SendGridModule;
//# sourceMappingURL=sendGrid.js.map
import { MailService } from '@sendgrid/mail';
import { ISendCreateUser, ISender, ISendGridInviteSpace } from '../interfaces';
interface IData {
    sendGrid: MailService;
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
    frontendHost: string;
}
export declare class SendGridService implements ISender {
    data: IData;
    constructor(sendGrid: MailService);
    getData(): void;
    setApiKey(apiKey: string): this;
    setFEHost(host: string): this;
    setReceiver(mail: string): this;
    setSubject(subject: string): this;
    setText(text: string): this;
    setHtml(htmlString: string): this;
    setFrom(from: string): this;
    send(): Promise<[import("@sendgrid/mail").ClientResponse, {}]>;
    inviteSpace: (inputSendGridInviteSpace: ISendGridInviteSpace) => Promise<void>;
    createUser: (inputSendGridInviteSpace: ISendCreateUser) => Promise<void>;
}
export declare class SendGridModule {
}
export {};

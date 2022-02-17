import { SenderFactoryService } from './factoryPattern/senderFactory';
import { ISendCreateUser, ISendGridInviteSpace } from './interfaces';
import { ConfigService } from '@nestjs/config';
export declare class SendersService {
    private readonly senderFactoryService;
    private readonly configService;
    constructor(senderFactoryService: SenderFactoryService, configService: ConfigService);
    sendInviteSpaceByGrid: (inputSendGridInviteSpace: ISendGridInviteSpace) => Promise<Boolean>;
    sendCreateUser: (inputSendGridInviteSpace: ISendCreateUser) => Promise<Boolean>;
}

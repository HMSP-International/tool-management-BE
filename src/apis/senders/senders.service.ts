import { Injectable } from '@nestjs/common';
import { SenderFactoryService } from './factoryPattern/senderFactory';
import { ISendGridInviteSpace } from './interfaces';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SendersService {
	constructor (
		private readonly senderFactoryService: SenderFactoryService,
		private readonly configService: ConfigService,
	) {}

	sendInviteSpaceByGrid = async (
		inputSendGridInviteSpace: ISendGridInviteSpace,
	): Promise<Boolean> => {
		try {
			const sendGrid = this.senderFactoryService.sender('sendGrid');

			const from = `HMSP <${this.configService.get<string>('sendGrid.customerEmail')}>`;
			const apiKey = this.configService.get<string>('sendGrid.apiKey');
			const frontEndHost = this.configService.get<string>('FE.host');

			sendGrid.setFrom(from);
			sendGrid.setApiKey(apiKey);
			sendGrid.setFEHost(frontEndHost);
			sendGrid.inviteSpace(inputSendGridInviteSpace);

			return true;
		} catch (error) {
			throw new Error(error.message);
		}
	};
}

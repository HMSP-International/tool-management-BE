import { SendGridService } from './sendGrid';
import { Module } from '@nestjs/common';
import { MailService } from '@sendgrid/mail';

export class SenderFactoryService {
	sender (sender: string) {
		if (sender === 'sendGrid') {
			const sendGrid = new MailService();
			return new SendGridService(sendGrid);
		}
	}
}

@Module({
	providers: [ SenderFactoryService ],
	exports: [ SenderFactoryService ],
})
export class SenderFactoryModule {}

import { MailService } from '@sendgrid/mail';
import { ISendCreateUser, ISender, ISendGridInviteSpace } from '../interfaces';
import { Module } from '@nestjs/common';

interface IData {
	sendGrid: MailService;
	to: string;
	from: string;
	subject: string;
	text: string;
	html: string;
	frontendHost: string;
}

export class SendGridService implements ISender {
	data: IData;

	constructor (sendGrid: MailService) {
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

	getData () {
		console.log(this.data);
	}

	setApiKey (apiKey: string) {
		this.data.sendGrid.setApiKey(apiKey);
		return this;
	}

	setFEHost (host: string) {
		this.data.frontendHost = host;
		return this;
	}

	setReceiver (mail: string) {
		this.data.to = mail;
		return this;
	}

	setSubject (subject: string) {
		this.data.subject = subject;
		return this;
	}

	setText (text: string) {
		this.data.text = text;
		return this;
	}

	setHtml (htmlString: string) {
		this.data.html = htmlString;
		return this;
	}

	setFrom (from: string) {
		this.data.from = from;
		return this;
	}

	async send () {
		try {
			const mail = await this.data.sendGrid.send(this.data);
			return mail;
		} catch (error) {
			throw new Error(error.message);
		}
	}

	inviteSpace = async (inputSendGridInviteSpace: ISendGridInviteSpace) => {
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
			} catch (error) {
				throw new Error(error.message);
			}
		} catch (error) {
			throw new Error(error.message);
		}
	};

	createUser = async (inputSendGridInviteSpace: ISendCreateUser) => {
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
			} catch (error) {
				throw new Error(error.message);
			}
		} catch (error) {
			throw new Error(error.message);
		}
	};
}

@Module({
	providers: [ SendGridService ],
	exports: [ SendGridService ],
})
export class SendGridModule {}

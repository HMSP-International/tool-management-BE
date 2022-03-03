import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddNewEmailInput, RemoveEmailInput } from './viewers.dto';
import { ViewerDocument, ViewerModel } from './viewers.model';
import { Model } from 'mongoose';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';

@Injectable()
export class ViewersService {
	constructor (@InjectModel(ViewerModel.name) private viewerEntity: Model<ViewerDocument>) {}

	async getViewer (user: IPayLoadToken): Promise<any> {
		const viewer = await this.viewerEntity.findOne({ _userId: user._id });

		if (viewer === null) {
			return {
				_id: '',
				_userId: user._id,
				emails: [],
			};
		}

		return viewer;
	}

	async addEmail (addNewEmail: AddNewEmailInput, user: IPayLoadToken): Promise<ViewerDocument> {
		const viewer = await this.viewerEntity.findOne({ _userId: user._id });

		if (viewer === null) {
			const newViewer = await new this.viewerEntity({
				_userId: user._id,
				emails: [ addNewEmail.email ],
			}).save();

			return newViewer;
		}
		else {
			const index = viewer.emails.findIndex(e => e === addNewEmail.email);
			// check if the email exists
			if (index < 0) {
				viewer.emails.push(addNewEmail.email);

				return await viewer.save();
			}

			return viewer;
		}
	}

	async removeEmail (removeEmail: RemoveEmailInput, user: IPayLoadToken): Promise<ViewerDocument> {
		const viewer = await this.viewerEntity.findOne({ _userId: user._id });

		if (viewer === null) {
			throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
		}
		else {
			viewer.emails = viewer.emails.filter(e => e !== removeEmail.email);
			return await viewer.save();
		}
	}
}

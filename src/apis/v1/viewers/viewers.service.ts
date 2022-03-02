import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddNewEmailInput, RemoveEmailInput } from './viewers.dto';
import { ViewerDocument, ViewerModel } from './viewers.model';
import { Model } from 'mongoose';

@Injectable()
export class ViewersService {
	constructor (@InjectModel(ViewerModel.name) private userEntity: Model<ViewerDocument>) {}

	async addEmail (addNewEmail: AddNewEmailInput): Promise<void> {}

	async removeEmail (removeEmail: RemoveEmailInput): Promise<void> {}
}

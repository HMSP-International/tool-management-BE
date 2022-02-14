import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
	constructor (private readonly configService: ConfigService) {}

	async uploadImageUser (file: string): Promise<string> {
		const avatar_staff = this.configService.get<string>('cloudinary.load_preset.avatar_staff');
		const uploadResImage = await v2.uploader.upload(file, { load_preset: avatar_staff, use_filename: true });

		return uploadResImage.public_id;
	}

	async uploadImageCustomer (file: string): Promise<string> {
		const avatar_customer = this.configService.get<string>('cloudinary.load_preset.avatar_customer');
		const uploadResImage = await v2.uploader.upload(file, { load_preset: avatar_customer, use_filename: true });

		return uploadResImage.public_id;
	}

	async deleteImage (_publicId: string): Promise<boolean> {
		try {
			await v2.uploader.destroy(_publicId);
			return true;
		} catch (err) {
			throw new HttpException('Cant delete image', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}

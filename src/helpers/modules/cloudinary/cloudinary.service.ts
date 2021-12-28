import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
	async uploadImage (file: string): Promise<string> {
		const uploadResImage = await v2.uploader.upload(file, { load_preset: 'avatars', use_filename: true });

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

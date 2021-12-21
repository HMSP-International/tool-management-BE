import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream from 'buffer-to-stream';

@Injectable()
export class CloudinaryService {
	async uploadImage (file: string): Promise<string> {
		const uploadResImage = await v2.uploader.upload(file, { load_preset: 'avatars', use_filename: true });

		return uploadResImage.public_id;
	}
}

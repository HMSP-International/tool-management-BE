import { ConfigService } from '@nestjs/config';
import { ConfigOptions, v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
	provide: CLOUDINARY,
	useFactory:
		(): ConfigOptions => {
			const cloud_name = 'hmsp-com';
			const api_key = '882426464554745';
			const api_secret = 'YlkQfpQ7PmkSE7bvIQW2ROV65H0';
			return v2.config({
				cloud_name,
				api_key,
				api_secret,
			});
		},
};

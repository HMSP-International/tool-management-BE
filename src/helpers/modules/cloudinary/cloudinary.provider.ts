import { ConfigOptions, v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
	provide: CLOUDINARY,
	useFactory:
		(): ConfigOptions => {
			const cloud_name = 'hmsp-cloudinary';
			const api_key = '828185581879961';
			const api_secret = 'AqglXRwk3NJHljaDGxjTJxJ0oZw';
			return v2.config({
				cloud_name,
				api_key,
				api_secret,
			});
		},
};

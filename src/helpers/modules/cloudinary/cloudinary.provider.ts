import { v2, ConfigOptions } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
	provide: CLOUDINARY,
	useFactory:
		(): ConfigOptions => {
			return v2.config({
				cloud_name: 'hmsp-com',
				api_key: '882426464554745',
				api_secret: 'YlkQfpQ7PmkSE7bvIQW2ROV65H0',
			});
		},
};

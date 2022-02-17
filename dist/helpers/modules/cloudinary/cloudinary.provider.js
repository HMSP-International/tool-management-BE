"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryProvider = void 0;
const cloudinary_1 = require("cloudinary");
const constants_1 = require("./constants");
exports.CloudinaryProvider = {
    provide: constants_1.CLOUDINARY,
    useFactory: () => {
        const cloud_name = 'hmsp-com';
        const api_key = '882426464554745';
        const api_secret = 'YlkQfpQ7PmkSE7bvIQW2ROV65H0';
        return cloudinary_1.v2.config({
            cloud_name,
            api_key,
            api_secret,
        });
    },
};
//# sourceMappingURL=cloudinary.provider.js.map
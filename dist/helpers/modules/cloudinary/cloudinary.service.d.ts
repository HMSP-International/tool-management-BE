import { ConfigService } from '@nestjs/config';
export declare class CloudinaryService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadImageUser(file: string): Promise<string>;
    uploadImageCustomer(file: string): Promise<string>;
    deleteImage(_publicId: string): Promise<boolean>;
}

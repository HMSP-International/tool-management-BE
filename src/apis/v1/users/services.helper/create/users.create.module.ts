import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../../classes/user.model';
import { UsersCreateService } from './users.create.service';
import { UsersFindModule } from '../find/users.find.module';
import { RolesModule } from '../../../roles/roles.module';
import { CloudinaryModule } from '../../../../../helpers/modules/cloudinary/cloudinary.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ]),
			UsersFindModule,
			RolesModule,
			CloudinaryModule,
		],
	providers: [ UsersCreateService ],
	exports: [ UsersCreateService ],
})
export class UsersCreateModule {}

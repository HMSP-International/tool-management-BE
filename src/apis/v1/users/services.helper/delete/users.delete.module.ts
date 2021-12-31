import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
import { CloudinaryModule } from 'helpers/modules/cloudinary/cloudinary.module';
import { UserModel, UserSchema } from '../../classes/user.model';
import { UsersDeleteService } from './users.delete.service';
import { PaticipantsModule } from 'apis/v1/paticipants/paticipants.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ]),
			forwardRef(() => CloudinaryModule),
			forwardRef(() => CollaboratorsModule),
			forwardRef(() => PaticipantsModule),
		],
	providers: [ UsersDeleteService ],
	exports: [ UsersDeleteService ],
})
export class UsersDeleteModule {}

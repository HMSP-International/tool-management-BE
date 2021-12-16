import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../../classes/user.model';
import { UsersDeleteService } from './users.delete.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ]) ],
	providers: [ UsersDeleteService ],
	exports: [ UsersDeleteService ],
})
export class UsersDeleteModule {}

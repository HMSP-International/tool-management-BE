import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './classes/user.model';
import { UsersPutModule } from './services.helper/put/users.put.module';
import { UsersFindModule } from './services.helper/find/users.find.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ]),
			UsersPutModule,
			UsersFindModule,
		],
	providers: [ UsersResolver, UsersService ],
	exports: [ UsersService ],
})
export class UsersModule {}

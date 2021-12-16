import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../../classes/user.model';
import { UsersCreateService } from './users.create.service';
import { UsersFindModule } from '../find/users.find.module';

@Module({
	imports: [ MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ]), UsersFindModule ],
	providers: [ UsersCreateService ],
	exports: [ UsersCreateService ],
})
export class UsersCreateModule {}

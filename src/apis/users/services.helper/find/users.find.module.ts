import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../../classes/user.model';
import { UsersFindService } from './users.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ]) ],
	providers: [ UsersFindService ],
	exports: [ UsersFindService ],
})
export class UsersFindModule {}
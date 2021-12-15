import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from '../../classes/user.model';
import { UsersPutService } from './users.put.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ]) ],
	providers: [ UsersPutService ],
	exports: [ UsersPutService ],
})
export class UsersPutModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from 'apis/v1/roles/roles.module';
import { UserModel, UserSchema } from '../../classes/user.model';
import { UsersFindService } from './users.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: UserModel.name, schema: UserSchema } ]), RolesModule ],
	providers: [ UsersFindService ],
	exports: [ UsersFindService ],
})
export class UsersFindModule {}

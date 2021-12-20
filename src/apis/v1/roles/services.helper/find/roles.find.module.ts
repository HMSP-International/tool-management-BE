import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { RoleModel, RoleSchema } from '../../classes/role.model';

import { RolesFindService } from './roles.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: RoleModel.name, schema: RoleSchema } ]) ],
	providers: [ RolesFindService ],
	exports: [ RolesFindService ],
})
export class RolesFindModule {}

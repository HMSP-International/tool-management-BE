import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from '../../../roles/roles.module';
import { PermissionModel, PermissionSchema } from '../../classes/permission.model';

import { PermissionsFindService } from './permissions.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: PermissionModel.name, schema: PermissionSchema } ]), RolesModule ],
	providers: [ PermissionsFindService ],
	exports: [ PermissionsFindService ],
})
export class PermissionsFindModule {}

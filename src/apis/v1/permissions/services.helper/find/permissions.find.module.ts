import { Module, forwardRef } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from 'apis/v1/roles/roles.module';
import { PermissionModel, PermissionSchema } from '../../classes/permission.model';

import { PermissionsFindService } from './permissions.find.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: PermissionModel.name, schema: PermissionSchema } ]),
			forwardRef(() => RolesModule),
		],
	providers: [ PermissionsFindService ],
	exports: [ PermissionsFindService ],
})
export class PermissionsFindModule {}

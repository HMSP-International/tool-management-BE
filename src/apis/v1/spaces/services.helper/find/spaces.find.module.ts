import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
import { SpaceModel, SpaceSchema } from '../../classes/space.model';
import { SpacesFindService } from './spaces.find.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: SpaceModel.name, schema: SpaceSchema } ]),
			forwardRef(() => CollaboratorsModule),
		],
	providers: [ SpacesFindService ],
	exports: [ SpacesFindService ],
})
export class SpacesFindModule {}

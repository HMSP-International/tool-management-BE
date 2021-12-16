import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceModel, SpaceSchema } from '../../classes/space.model';
import { SpacesFindService } from './spaces.find.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: SpaceModel.name, schema: SpaceSchema } ]) ],
	providers: [ SpacesFindService ],
	exports: [ SpacesFindService ],
})
export class SpacesFindModule {}

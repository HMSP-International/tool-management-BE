import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceModel, SpaceSchema } from '../../classes/space.model';
import { SpacesFindModule } from '../find/spaces.find.module';
import { SpacesCreateService } from './spaces.create.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: SpaceModel.name, schema: SpaceSchema } ]), SpacesFindModule ],
	providers: [ SpacesCreateService ],
	exports: [ SpacesCreateService ],
})
export class SpacesCreateModule {}

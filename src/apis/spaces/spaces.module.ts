import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesResolver } from './spaces.resolver';
import { SpaceModel, SpaceSchema } from './space.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [ MongooseModule.forFeature([ { name: SpaceModel.name, schema: SpaceSchema } ]) ],
	providers: [ SpacesResolver, SpacesService ],
	exports: [ SpacesService ],
})
export class SpacesModule {}

import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesResolver } from './spaces.resolver';
import { Space, SpaceSchema } from './space.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [ MongooseModule.forFeature([ { name: Space.name, schema: SpaceSchema } ]) ],
	providers: [ SpacesResolver, SpacesService ],
})
export class SpacesModule {}

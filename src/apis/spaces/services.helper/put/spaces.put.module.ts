import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpaceModel, SpaceSchema } from '../../classes/space.model';
import { SpacesPutService } from './spaces.put.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: SpaceModel.name, schema: SpaceSchema } ]) ],
	providers: [ SpacesPutService ],
	exports: [ SpacesPutService ],
})
export class SpacesPutModule {}

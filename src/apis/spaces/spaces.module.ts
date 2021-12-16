import { Module } from '@nestjs/common';
import { SpacesService } from './spaces.service';
import { SpacesResolver } from './spaces.resolver';
import { SpacesCreateModule } from './services.helper/create/spaces.create.module';
import { SpacesDeleteModule } from './services.helper/delete/spaces.delete.module';
import { SpacesFindModule } from './services.helper/find/spaces.find.module';
import { SpacesPutModule } from './services.helper/put/spaces.put.module';

@Module({
	imports: [ SpacesCreateModule, SpacesDeleteModule, SpacesFindModule, SpacesPutModule ],
	providers: [ SpacesResolver, SpacesService ],
	exports: [ SpacesService ],
})
export class SpacesModule {}

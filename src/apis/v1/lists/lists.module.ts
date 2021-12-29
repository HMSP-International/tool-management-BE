import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsResolver } from './lists.resolver';

import { ListsCreateModule } from './services.helper/create/lists.create.module';
import { ListsFindModule } from './services.helper/find/lists.find.module';
import { ListsDeleteModule } from './services.helper/delete/lists.delete.module';
import { ListsPutModule } from './services.helper/put/lists.put.module';

@Module({
	imports: [ ListsCreateModule, ListsDeleteModule, ListsFindModule, ListsPutModule ],
	providers: [ ListsResolver, ListsService ],
	exports: [ ListsService ],
})
export class ListsModule {}

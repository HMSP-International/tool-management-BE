import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ListModel, ListSchema } from '../../classes/list.model';

import { ListsPutService } from './lists.put.service';

@Module({
	imports: [ MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]) ],
	providers: [ ListsPutService ],
	exports: [ ListsPutService ],
})
export class ListsPutModule {}

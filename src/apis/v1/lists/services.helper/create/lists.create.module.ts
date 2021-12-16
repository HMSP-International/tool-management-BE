import { forwardRef, Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ListModel, ListSchema } from '../../classes/list.model';

import { ListsCreateService } from './lists.create.service';

import { ProjectsModule } from '../../../projects/projects.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]),
			forwardRef(() => ProjectsModule),
		],
	providers: [ ListsCreateService ],
	exports: [ ListsCreateService ],
})
export class ListsCreateModule {}

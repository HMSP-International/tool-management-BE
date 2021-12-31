import { forwardRef, Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ListModel, ListSchema } from '../../classes/list.model';

import { ListsFindService } from './lists.find.service';

import { ProjectsModule } from 'apis/v1/projects/projects.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]),
			forwardRef(() => ProjectsModule),
		],
	providers: [ ListsFindService ],
	exports: [ ListsFindService ],
})
export class ListsFindModule {}

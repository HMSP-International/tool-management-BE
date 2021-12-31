import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from 'apis/v1/projects/projects.module';
import { ListModel, ListSchema } from '../../classes/list.model';
import { ListsPutService } from './lists.put.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]),
			forwardRef(() => ProjectsModule),
		],
	providers: [ ListsPutService ],
	exports: [ ListsPutService ],
})
export class ListsPutModule {}

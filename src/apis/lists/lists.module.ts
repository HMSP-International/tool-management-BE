import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsResolver } from './lists.resolver';
import { ListModel, ListSchema } from './list.model';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from '../projects/projects.module';

@Module({
	imports: [ MongooseModule.forFeature([ { name: ListModel.name, schema: ListSchema } ]), ProjectsModule ],
	providers: [ ListsResolver, ListsService ],
})
export class ListsModule {}

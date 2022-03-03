import { Module } from '@nestjs/common';
import { ViewersService } from './viewers.service';
import { ViewersResolver } from './viewers.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewerModel, ViewerSchema } from './viewers.model';

@Module({
	imports: [ MongooseModule.forFeature([ { name: ViewerModel.name, schema: ViewerSchema } ]) ],
	providers: [ ViewersResolver, ViewersService ],
})
export class ViewersModule {}

import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaticipantsModule } from 'apis/v1/paticipants/paticipants.module';
import { ProjectModel, ProjectSchema } from '../../classes/project.model';
import { ProjectsFindService } from './projects.find.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ProjectModel.name, schema: ProjectSchema } ]),
			forwardRef(() => PaticipantsModule),
		],
	providers: [ ProjectsFindService ],
	exports: [ ProjectsFindService ],
})
export class ProjectsFindModule {}

import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { PaticipantsModule } from '../../../paticipants/paticipants.module';
import { SpacesModule } from '../../../spaces/spaces.module';
import { ProjectModel, ProjectSchema } from '../../classes/project.model';
import { ProjectsCreateService } from './projects.create.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: ProjectModel.name, schema: ProjectSchema } ]),
			forwardRef(() => SpacesModule),
			// forwardRef(() => PaticipantsModule),
		],
	providers: [ ProjectsCreateService ],
	exports: [ ProjectsCreateService ],
})
export class ProjectsCreateModule {}

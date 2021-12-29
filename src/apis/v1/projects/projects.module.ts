import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';

import { ProjectsCreateModule } from './services.helper/create/projects.create.module';
import { ProjectsFindModule } from './services.helper/find/projects.find.module';
import { ProjectsDeleteModule } from './services.helper/delete/projects.delete.module';
import { ProjectsPutModule } from './services.helper/put/projects.put.module';

@Module({
	imports: [ ProjectsCreateModule, ProjectsDeleteModule, ProjectsFindModule, ProjectsPutModule ],
	providers: [ ProjectsResolver, ProjectsService ],
	exports: [ ProjectsService ],
})
export class ProjectsModule {}

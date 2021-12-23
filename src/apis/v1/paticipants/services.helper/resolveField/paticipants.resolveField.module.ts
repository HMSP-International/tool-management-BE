import { Module } from '@nestjs/common';
// modules
import { CollaboratorsModule } from '../../../collaborators/collaborators.module';
import { ProjectsModule } from '../../../projects/projects.module';
// services
import { PaticipantsResolverFieldService } from './paticipants.resolveField.service';

@Module({
	imports: [ CollaboratorsModule, ProjectsModule ],
	providers: [ PaticipantsResolverFieldService ],
	exports: [ PaticipantsResolverFieldService ],
})
export class PaticipantsResolverFieldModule {}

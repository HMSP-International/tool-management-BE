import { Module, forwardRef } from '@nestjs/common';
// modules
import { CollaboratorsModule } from '../../../collaborators/collaborators.module';
import { ProjectsModule } from '../../../projects/projects.module';
// services
import { PaticipantsResolverFieldService } from './paticipants.resolveField.service';

@Module({
	imports: [ forwardRef(() => CollaboratorsModule), forwardRef(() => ProjectsModule) ],
	providers: [ PaticipantsResolverFieldService ],
	exports: [ PaticipantsResolverFieldService ],
})
export class PaticipantsResolverFieldModule {}

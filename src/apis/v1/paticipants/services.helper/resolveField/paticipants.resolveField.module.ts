import { Module, forwardRef } from '@nestjs/common';
// modules
import { UsersModule } from '../../../users/users.module';
import { CollaboratorsModule } from '../../../collaborators/collaborators.module';
import { ProjectsModule } from '../../../projects/projects.module';
// services
import { PaticipantsResolverFieldService } from './paticipants.resolveField.service';

@Module({
	imports: [ forwardRef(() => CollaboratorsModule), forwardRef(() => ProjectsModule), forwardRef(() => UsersModule) ],
	providers: [ PaticipantsResolverFieldService ],
	exports: [ PaticipantsResolverFieldService ],
})
export class PaticipantsResolverFieldModule {}

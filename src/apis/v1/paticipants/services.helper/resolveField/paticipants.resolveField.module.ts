import { Module, forwardRef } from '@nestjs/common';
// modules
import { UsersModule } from 'apis/v1/users/users.module';
import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
import { ProjectsModule } from 'apis/v1/projects/projects.module';
// services
import { PaticipantsResolverFieldService } from './paticipants.resolveField.service';

@Module({
	imports: [ forwardRef(() => CollaboratorsModule), forwardRef(() => ProjectsModule), forwardRef(() => UsersModule) ],
	providers: [ PaticipantsResolverFieldService ],
	exports: [ PaticipantsResolverFieldService ],
})
export class PaticipantsResolverFieldModule {}

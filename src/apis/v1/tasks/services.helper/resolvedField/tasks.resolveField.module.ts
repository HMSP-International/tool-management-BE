import { Module, forwardRef } from '@nestjs/common';
// modules
import { UsersModule } from 'apis/v1/users/users.module';
import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
import { ProjectsModule } from 'apis/v1/projects/projects.module';
// services
import { TasksResolverFieldService } from './tasks.resolveField.service';
import { CommentsModule } from 'apis/v1/comments/comments.module';

@Module({
	imports:
		[
			forwardRef(() => CollaboratorsModule),
			forwardRef(() => ProjectsModule),
			forwardRef(() => UsersModule),
			forwardRef(() => CommentsModule),
		],
	providers: [ TasksResolverFieldService ],
	exports: [ TasksResolverFieldService ],
})
export class TasksResolverFieldModule {}

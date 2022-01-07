// 3rd dependencies
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// Module
import { AuthModule } from 'apis/v1/auth/auth.module';
import { CollaboratorsModule } from 'apis/v1/collaborators/collaborators.module';
import { CommentsModule } from 'apis/v1/comments/comments.module';
import { ListsModule } from 'apis/v1/lists/lists.module';
import { PaticipantsModule } from 'apis/v1/paticipants/paticipants.module';
import { PermissionsModule } from 'apis/v1/permissions/permissions.module';
import { ProjectsModule } from 'apis/v1/projects/projects.module';
import { RolesModule } from 'apis/v1/roles/roles.module';
import { SpacesModule } from 'apis/v1/spaces/spaces.module';
import { TasksModule } from 'apis/v1/tasks/tasks.module';
import { UsersModule } from 'apis/v1/users/users.module';

@Module({
	imports:
		[
			AuthModule,
			CollaboratorsModule,
			CommentsModule,
			ListsModule,
			PaticipantsModule,
			PermissionsModule,
			ProjectsModule,
			RolesModule,
			SpacesModule,
			TasksModule,
			UsersModule,
		],
})
export class FeaturesModule implements NestModule {
	configure (consumer: MiddlewareConsumer) {}
}

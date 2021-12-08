// 3rd dependencies
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// Module
import { AuthModule } from '../apis/auth/auth.module';
import { CollaboratorsModule } from '../apis/collaborators/collaborators.module';
import { ProjectsModule } from '../apis/projects/projects.module';
import { SpacesModule } from '../apis/spaces/spaces.module';
// import { TasksModule } from '../apis/tasks/tasks.module';
import { UsersModule } from '../apis/users/users.module';

@Module({
	imports:
		[
			AuthModule,
			CollaboratorsModule,
			ProjectsModule,
			SpacesModule,
			// TasksModule,
			UsersModule,
		],
})
export class FeaturesModule implements NestModule {
	configure (consumer: MiddlewareConsumer) {}
}

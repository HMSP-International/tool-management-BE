// 3rd dependencies
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// Module
import { AuthModule } from '../components/auth/auth.module';
import { CollaboratorsModule } from '../components/collaborators/collaborators.module';
import { ProjectsModule } from '../components/projects/projects.module';
import { SendersModule } from '../components/senders/senders.module';
import { SpacesModule } from '../components/spaces/spaces.module';
import { TasksModule } from '../components/tasks/tasks.module';
import { UsersModule } from '../components/users/users.module';

@Module({
	imports:
		[
			AuthModule,
			CollaboratorsModule,
			ProjectsModule,
			SendersModule,
			SpacesModule,
			TasksModule,
			UsersModule,
		],
})
export class FeaturesModule implements NestModule {
	configure (consumer: MiddlewareConsumer) {}
}

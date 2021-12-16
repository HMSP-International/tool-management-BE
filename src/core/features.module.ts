// 3rd dependencies
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// Module
import { AuthModule } from '../apis/v1/auth/auth.module';
import { CollaboratorsModule } from '../apis/v1/collaborators/collaborators.module';
import { ListsModule } from '../apis/lists/lists.module';
import { ProjectsModule } from '../apis/v1/projects/projects.module';
import { SpacesModule } from '../apis/v1/spaces/spaces.module';
import { TasksModule } from '../apis/v1/tasks/tasks.module';
import { UsersModule } from '../apis/v1/users/users.module';

@Module({
	imports: [ AuthModule, CollaboratorsModule, ListsModule, ProjectsModule, SpacesModule, TasksModule, UsersModule ],
})
export class FeaturesModule implements NestModule {
	configure (consumer: MiddlewareConsumer) {}
}

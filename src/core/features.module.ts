// 3rd dependencies
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// Module
import { AuthModule } from '../components/auth/auth.module';
import { UsersModule } from '../components/users/users.module';
import { TasksModule } from '../components/tasks/tasks.module';
import { SpacesModule } from '../components/spaces/spaces.module';

@Module({
	imports: [ AuthModule, UsersModule, TasksModule, SpacesModule ],
})
export class FeaturesModule implements NestModule {
	configure (consumer: MiddlewareConsumer) {}
}

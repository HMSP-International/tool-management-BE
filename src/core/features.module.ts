// 3rd dependencies
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

// Module
import { AuthModule } from '../components/auth/auth.module';
import { UsersModule } from '../components/users/users.module';
import { TasksModule } from '../components/tasks/tasks.module';

@Module({
	imports: [ AuthModule, UsersModule, TasksModule ],
})
export class FeaturesModule implements NestModule {
	configure (consumer: MiddlewareConsumer) {}
}

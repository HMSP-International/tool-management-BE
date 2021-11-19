// 3rd dependencies
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

// Module
import { AuthModule } from '../components/auth/auth.module';
import { UsersModule } from '../components/users/users.module';

@Module({
	imports: [ AuthModule, UsersModule ],
})
export class FeaturesModule implements NestModule {
	configure (consumer: MiddlewareConsumer) {}
}

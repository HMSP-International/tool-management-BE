import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'apis/v1/users/users.module';

@Module({
	imports: [ UsersModule ],
	providers: [ AuthResolver, AuthService ],
})
export class AuthModule {}

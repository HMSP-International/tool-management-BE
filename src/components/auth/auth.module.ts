import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/users.module';
import { TokenModule } from './token/token.module';

@Module({
	imports: [ TokenModule, UsersModule ],
	providers: [ AuthResolver, AuthService ],
})
export class AuthModule {}

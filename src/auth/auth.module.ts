import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { TokenModule } from '../token/token.module';

@Module({
	imports:
		[
			TokenModule,
			UsersModule,
			JwtModule.registerAsync({
				imports: [ ConfigModule ],
				useFactory:
					async (configService: ConfigService) => {
						return {
							secret: configService.get<string>('jwt.secret'),
							signOptions: { expiresIn: configService.get<string>('jwt.expiresIn') },
						};
					},
				inject: [ ConfigService ],
			}),
		],
	providers: [ AuthResolver, AuthService ],
})
export class AuthModule {}

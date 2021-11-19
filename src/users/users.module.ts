import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.entity';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: User.name, schema: UserSchema } ]),
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
	providers: [ UsersResolver, UsersService ],
	exports: [ UsersService ],
})
export class UsersModule {}

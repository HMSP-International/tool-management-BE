// 3rd dependencies
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

// Common
import configuration from './common/config/configuration';

// Module
import { PetsModule } from './pets/pets.module';
import { OwnersModule } from './owners/owners.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenModule } from './token/token.module';

@Module({
	imports:
		[
			MongooseModule.forRootAsync({
				imports: [ ConfigModule ],
				useFactory:
					async (configService: ConfigService) => {
						return {
							uri: configService.get<string>('db.mongodb.host'),
						};
					},
				inject: [ ConfigService ],
			}),
			GraphQLModule.forRoot({
				autoSchemaFile: join(process.cwd(), 'schema.gql'),
			}),
			PetsModule,
			OwnersModule,
			AuthModule,
			UsersModule,
			ConfigModule.forRoot({
				isGlobal: true,
				load: [ configuration ],
			}),
			TokenModule,
		],
})
export class AppModule {}

// 3rd dependencies
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

// Common
import configuration from '../common/config/configuration';

@Global()
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
			ConfigModule.forRoot({
				isGlobal: true,
				load: [ configuration ],
			}),
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
	exports: [ ConfigModule, JwtModule ],
})
export class CoresModule {}

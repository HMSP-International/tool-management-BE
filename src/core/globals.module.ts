// 3rd dependencies
import { Global, Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
// Middleware
import * as compression from 'compression';
import { JwtMiddleware } from '../common/middleware/jwt.middleware';
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
				autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
				sortSchema: true,
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
export class CoresModule implements NestModule {
	configure (consumer: MiddlewareConsumer) {
		consumer
			.apply(compression(), JwtMiddleware)
			// .apply(compression())
			.forRoutes({ path: '*', method: RequestMethod.POST });
	}
}

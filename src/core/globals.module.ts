// 3rd dependencies
import { Global, Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
// Middleware
import * as compression from 'compression';
import { JwtMiddleware } from 'common/middleware/jwt.middleware';
// Common
import configuration from 'common/config/configuration';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

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
				sortSchema: true,
				formatError:
					(e: GraphQLError) => {
						const graphQLFormattedError: GraphQLFormattedError = {
							message: e.message,
							extensions: e.extensions?.response?.message,
						};
						return graphQLFormattedError;
					},
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
			.forRoutes({ path: 'graphql', method: RequestMethod.POST })
			.apply(compression(), JwtMiddleware)
			.forRoutes({ path: '*', method: RequestMethod.GET });
	}
}

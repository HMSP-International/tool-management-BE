import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Collaborator, CollaboratorSchema } from './collaborator.entity';
import { SendersModule } from '../senders/senders.module';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { SpacesModule } from '../spaces/spaces.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: Collaborator.name, schema: CollaboratorSchema } ]),
			SendersModule,
			UsersModule,
			SpacesModule,
			JwtModule.registerAsync({
				imports: [ ConfigModule ],
				useFactory:
					async (configService: ConfigService) => {
						return {
							secret: configService.get<string>('sendGrid.jwt.secret'),
							signOptions:
								{ expiresIn: configService.get<string>('sendGrid.jwt.expiresIn') },
						};
					},
				inject: [ ConfigService ],
			}),
		],
	providers: [ CollaboratorsResolver, CollaboratorsService ],
})
export class CollaboratorsModule {}

import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CollaboratorModel, CollaboratorSchema } from './collaborator.model';
import { SendersModule } from '../../helpers/modules/senders/senders.module';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { SpacesModule } from '../spaces/spaces.module';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: CollaboratorModel.name, schema: CollaboratorSchema } ]),
			SendersModule,
			UsersModule,
			SpacesModule,
			JwtModule.registerAsync({
				imports: [ ConfigModule ],
				useFactory:
					async (configService: ConfigService) => {
						return {
							secret: configService.get<string>('sendGrid.jwt.secret'),
							signOptions: { expiresIn: configService.get<string>('sendGrid.jwt.expiresIn') },
						};
					},
				inject: [ ConfigService ],
			}),
		],
	providers: [ CollaboratorsResolver, CollaboratorsService ],
})
export class CollaboratorsModule {}

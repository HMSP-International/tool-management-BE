import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
// helpers
import { SendersModule } from '../../../../../helpers/modules/senders/senders.module';
import { CollaboratorsFindModule } from '../find/collaborators.find.module';
// mongoose
import { CollaboratorModel, CollaboratorSchema } from '../../classes/collaborator.model';
// Module
import { UsersModule } from '../../../users/users.module';
// services
import { CollaboratorsInviteService } from './collaborators.invite.service';

@Module({
	imports:
		[
			MongooseModule.forFeature([ { name: CollaboratorModel.name, schema: CollaboratorSchema } ]),
			UsersModule,
			CollaboratorsFindModule,
			SendersModule,
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
	providers: [ CollaboratorsInviteService ],
	exports: [ CollaboratorsInviteService ],
})
export class CollaboratorsInviteModule {}

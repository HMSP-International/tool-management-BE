import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';
import { CollaboratorsResolverFieldModule } from './services.helper/resolveField/collaborators.resolveField.module';
import { CollaboratorsFindModule } from './services.helper/find/collaborators.find.module';
import { CollaboratorsInviteModule } from './services.helper/invite/collaborators.invite.module';

@Module({
	imports: [ CollaboratorsResolverFieldModule, CollaboratorsFindModule, CollaboratorsInviteModule ],
	providers: [ CollaboratorsResolver, CollaboratorsService ],
	exports: [ CollaboratorsService ],
})
export class CollaboratorsModule {}

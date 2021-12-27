import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';
import { CollaboratorsResolverFieldModule } from './services.helper/resolveField/collaborators.resolveField.module';
import { CollaboratorsFindModule } from './services.helper/find/collaborators.find.module';
import { CollaboratorsCreateModule } from './services.helper/create/collaborators.create.module';
import { CollaboratorsDeleteModule } from './services.helper/delete/collaborators.delete.module';

@Module({
	imports:
		[
			CollaboratorsResolverFieldModule,
			CollaboratorsDeleteModule,
			CollaboratorsFindModule,
			CollaboratorsCreateModule,
		],
	providers: [ CollaboratorsResolver, CollaboratorsService ],
	exports: [ CollaboratorsService ],
})
export class CollaboratorsModule {}

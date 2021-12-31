import { forwardRef, Module } from '@nestjs/common';
// modules
import { UsersModule } from 'apis/v1/users/users.module';
import { SpacesModule } from 'apis/v1/spaces/spaces.module';
// services
import { CollaboratorsResolverFieldService } from './collaborators.resolveField.service';

@Module({
	imports: [ forwardRef(() => UsersModule), SpacesModule ],
	providers: [ CollaboratorsResolverFieldService ],
	exports: [ CollaboratorsResolverFieldService ],
})
export class CollaboratorsResolverFieldModule {}

// 3rd dependencies
import { Module } from '@nestjs/common';

// Module
import { PetsModule } from '../pets/pets.module';
import { OwnersModule } from '../owners/owners.module';
import { AuthModule } from '../components/auth/auth.module';
import { UsersModule } from '../components/users/users.module';
import { TokenModule } from '../components/auth/token/token.module';

@Module({
	imports: [ PetsModule, OwnersModule, AuthModule, UsersModule, TokenModule ],
})
export class FeaturesModule {}

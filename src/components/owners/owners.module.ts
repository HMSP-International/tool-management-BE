import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnersService } from './owners.service';
import { OwnersResolver } from './owners.resolver';
import { OwnerSchema, Owner } from './owner.model';

@Module({
	imports: [ MongooseModule.forFeature([ { name: Owner.name, schema: OwnerSchema } ]) ],
	providers: [ OwnersResolver, OwnersService ],
	exports: [ OwnersService ],
})
export class OwnersModule {}

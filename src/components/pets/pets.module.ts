import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { Pet, PetSchema } from './pet.model';
import { OwnersModule } from '../owners/owners.module';

@Module({
	imports: [ MongooseModule.forFeature([ { name: Pet.name, schema: PetSchema } ]), OwnersModule ],
	providers: [ PetsService, PetsResolver, Pet ],
	exports: [ PetsService ],
})
export class PetsModule {}

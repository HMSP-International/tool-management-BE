import { Owner } from './../owners/owner.model';
import { Resolver, Query, Mutation, Args, Parent, ResolveField } from '@nestjs/graphql';
import { CreatePetDto } from './dto/create-pet.input';
import { Pet } from './pet.model';
import { PetsService } from './pets.service';

@Resolver(of => Pet)
export class PetsResolver {
	constructor (private petsService: PetsService) {}

	@Query(returns => [ Pet ])
	getPets (): Promise<Pet[]> {
		return this.petsService.findAll();
	}

	@Query(returns => Pet)
	getPet (@Args('petId') petId: string): Promise<Pet> {
		return this.petsService.findOne(petId);
	}

	@ResolveField(returns => Owner)
	owner (@Parent() pet: Pet): Promise<Owner> {
		return this.petsService.getOwner(pet.ownerId);
	}

	// Mutaions
	@Mutation(returns => Pet)
	createPet (@Args('petInput') petInput: CreatePetDto): Promise<Pet> {
		return this.petsService.create(petInput);
	}
}

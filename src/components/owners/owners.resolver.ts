import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import { Owner } from './owner.model';
import { CreateOwnerInput } from './dto/create-owner.input';
import { Pet } from '../pets/pet.model';

@Resolver(() => Owner)
export class OwnersResolver {
	constructor (private readonly ownersService: OwnersService) {}

	@Mutation(() => Owner)
	async createOwner (
		@Args('createOwnerInput') createOwnerInput: CreateOwnerInput,
	): Promise<Owner> {
		return this.ownersService.create(createOwnerInput);
	}

	@Query(() => [ Owner ], { name: 'owners' })
	async findAll (): Promise<Owner[]> {
		return this.ownersService.findAll();
	}

	@Query(() => Owner, { name: 'owner' })
	findOne (@Args('id') id: string) {
		return this.ownersService.findOne(id);
	}

	// @Mutation(() => Owner)
	// updateOwner (@Args('updateOwnerInput') updateOwnerInput: UpdateOwnerInput) {
	// 	return this.ownersService.update(updateOwnerInput.id, updateOwnerInput);
	// }

	@Mutation(() => Owner)
	removeOwner (
		@Args('id', { type: () => Int })
		id: number,
	) {
		return this.ownersService.remove(id);
	}
}

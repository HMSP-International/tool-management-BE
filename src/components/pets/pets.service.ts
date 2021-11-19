import { OwnersService } from '../owners/owners.service';
import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet, PetDocument } from './pet.model';
import { CreatePetDto } from './dto/create-pet.input';
import { Owner } from '../owners/owner.model';

@Injectable()
export class PetsService {
	constructor (
		@InjectModel(Pet.name) private petModel: Model<PetDocument>,
		@Inject(forwardRef(() => OwnersService)) private ownersService: OwnersService,
	) {}

	async create (petInput: CreatePetDto): Promise<Pet> {
		const newPet = await new this.petModel(petInput);

		const pet = await newPet.save();

		return pet;
	}

	async findAll (): Promise<Pet[]> {
		const pets = await this.petModel.find();

		return pets;
	}

	async findOne (_id: string): Promise<Pet> {
		const pet = await this.petModel.findById(_id);

		if (pet === null) {
			throw new NotFoundException('Can not find pet with _id = ' + _id);
		}

		return pet;
	}

	async getOwner (ownerId: string): Promise<Owner> {

		const onwer = await this.ownersService.findOne(ownerId);

		return onwer;
	}
}

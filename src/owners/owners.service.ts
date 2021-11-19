import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOwnerInput } from './dto/create-owner.input';

import { Model } from 'mongoose';
import { Owner, OwnerDocument } from './owner.model';
import { PetsService } from '../pets/pets.service';
import { Pet } from '../pets/pet.model';

@Injectable()
export class OwnersService {
	constructor (@InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>) {}

	async create (createOwnerInput: CreateOwnerInput): Promise<Owner> {
		const newOwner = await new this.ownerModel(createOwnerInput);

		const owner = await newOwner.save();

		return owner;
	}

	async findAll (): Promise<Owner[]> {
		const pets = await this.ownerModel.find();

		return pets;
	}

	async findOne (_id: string): Promise<Owner> {
		const owner = await this.ownerModel.findById(_id);

		if (owner === null) {
			throw new NotFoundException('Can not find Owner with _id = ' + _id);
		}

		return owner;
	}

	// update (id: number, updateOwnerInput: UpdateOwnerInput) {
	// 	return `This action updates a #${id} owner`;
	// }

	remove (id: number) {
		return `This action removes a #${id} owner`;
	}
}

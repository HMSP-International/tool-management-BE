import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from '../../classes/role.entity';
import { RoleDocument, RoleModel } from '../../classes/role.model';

@Injectable()
export class RolesFindService {
	constructor (@InjectModel(RoleModel.name) private roleEntity: Model<RoleDocument>) {}

	async findById (_id: string): Promise<RoleDocument | null> {
		return await this.roleEntity.findById(_id);
	}

	async findAll (): Promise<RoleDocument[]> {
		return await this.roleEntity.find({});
	}

	async findByName (roleName: string): Promise<RoleDocument | null> {
		return await this.roleEntity.findOne({ name: roleName });
	}
}

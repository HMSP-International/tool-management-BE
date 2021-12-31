import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RolesService } from 'apis/v1/roles/roles.service';
import { PermissionDocument, PermissionModel } from '../../classes/permission.model';

@Injectable()
export class PermissionsFindService {
	constructor (
		@InjectModel(PermissionModel.name) private permissionEntity: Model<PermissionDocument>,
		private readonly rolesService: RolesService,
	) {}

	async findByRoleIdAndResolverName (roleName: string, resolverName: string): Promise<boolean> {
		const role = await this.rolesService.findByName(roleName);
		if (role === null) return false;
		if (role.name === 'SUPER_ADMIN') return true;

		const isPermit = await this.permissionEntity.findOne({ _roleId: role._id, resolverName });

		return isPermit ? true : false;
	}
}

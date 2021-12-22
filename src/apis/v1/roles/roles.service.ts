import { Injectable } from '@nestjs/common';
import { RolesFindService } from './services.helper/find/roles.find.service';

@Injectable()
export class RolesService {
	constructor (private readonly rolesFindService: RolesFindService) {}

	findById (_id: string) {
		return this.rolesFindService.findById(_id);
	}

	findAll () {
		return this.rolesFindService.findAll();
	}

	findByName (roleName: string) {
		return this.rolesFindService.findByName(roleName);
	}
}

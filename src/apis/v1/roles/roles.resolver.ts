import { Query, Resolver } from '@nestjs/graphql';
import { PERMISSIONS } from 'commons/decorator/permissions.decorator';
import { Role } from './classes/role.entity';
import { RolesService } from './roles.service';

@Resolver(() => Role)
export class RolesResolver {
	constructor (private readonly rolesService: RolesService) {}

	@PERMISSIONS({ resolverName: 'getRoles' })
	@Query(() => [ Role ])
	async getRoles () {
		return this.rolesService.findAll();
	}
}

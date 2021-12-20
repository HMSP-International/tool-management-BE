import { Resolver } from '@nestjs/graphql';
import { Role } from './classes/role.entity';
import { RolesService } from './roles.service';

@Resolver(() => Role)
export class RolesResolver {
	constructor (private readonly rolesService: RolesService) {}
}

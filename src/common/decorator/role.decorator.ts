import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guard/role.guard';

export const ROLES_KEY = 'roles';

export enum ROLE {
	superAdmin = 'SUPER_ADMIN',
	admin = 'ADMIN',
	member = 'MEMBER',
}

export const Roles = (...roles: ROLE[]) => {
	return applyDecorators(SetMetadata(ROLES_KEY, roles), UseGuards(RolesGuard));
};

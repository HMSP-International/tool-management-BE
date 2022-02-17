import { SetMetadata, applyDecorators, UseGuards } from '@nestjs/common';
import { PermissionssGuard } from '../guard/permissions.guard';

export const ROLES_KEY = 'permissions';

export enum ROLE {
	superAdmin = 'SUPER_ADMIN',
	admin = 'ADMIN',
	member = 'MEMBER',
}

export interface PERMISSIONS {
	resolverName: string;
}

export const PERMISSIONS = (permissions: PERMISSIONS) => {
	return applyDecorators(SetMetadata(ROLES_KEY, permissions), UseGuards(PermissionssGuard));
};

import { Injectable, CanActivate, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PermissionsService } from '../../apis/v1/permissions/permissions.service';
import { PERMISSIONS, ROLES_KEY } from '../decorator/permissions.decorator';

// @Global()
@Injectable()
export class PermissionssGuard implements CanActivate {
	constructor (private reflector: Reflector, private readonly permissionsService: PermissionsService) {}

	async canActivate (context: GqlExecutionContext): Promise<boolean> {
		const ctx = GqlExecutionContext.create(context);
		const { user } = ctx.getContext().req;

		// if dont send token
		if (!user) throw new HttpException('Cant find token in authorization headers', HttpStatus.UNAUTHORIZED);

		// get what roles this context needs
		const permissions = this.reflector.getAllAndOverride<PERMISSIONS>(ROLES_KEY, [
			context.getHandler(),
			context.getClass(),
		]);

		const isPermit = await this.permissionsService.findByRoleIdAndResolverName(
			user._roleId.name,
			permissions.resolverName,
		);

		if (isPermit === false) {
			throw new HttpException('Not Permission', HttpStatus.BAD_REQUEST);
		}

		return isPermit;
	}
}

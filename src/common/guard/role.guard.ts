import { Injectable, CanActivate, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ROLE, ROLES_KEY } from '../decorator/role.decorator';

// @Global()
@Injectable()
export class RolesGuard implements CanActivate {
	constructor (private reflector: Reflector) {}

	async canActivate (context: GqlExecutionContext): Promise<boolean> {
		console.log('RolesGuard');

		const ctx = GqlExecutionContext.create(context);

		const requiredRoles = this.reflector.getAllAndOverride<ROLE[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass(),
		]);

		if (!requiredRoles) {
			return true;
		}
		const { user } = ctx.getContext().req;

		// console.log('requiredRoles: ', requiredRoles);
		// console.log('currentRole: ', user.role);
		const isTrue: boolean = requiredRoles.includes(user.role);

		if (!isTrue) throw new HttpException('Invalid role', HttpStatus.UNAUTHORIZED);

		return true;
	}
}

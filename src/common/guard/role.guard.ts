import { Injectable, CanActivate, HttpException, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ROLE, ROLES_KEY } from '../decorator/role.decorator';

// @Global()
@Injectable()
export class RolesGuard implements CanActivate {
	constructor (private reflector: Reflector) {}

	async canActivate (context: GqlExecutionContext): Promise<boolean> {
		const ctx = GqlExecutionContext.create(context);
		const { user } = ctx.getContext().req;

		// if dont send token
		if (!user)
			throw new HttpException(
				'Cant find token in authorization headers',
				HttpStatus.UNAUTHORIZED,
			);

		// get what roles this context needs
		const requiredRoles = this.reflector.getAllAndOverride<ROLE[]>(ROLES_KEY, [
			context.getHandler(),
			context.getClass(),
		]);

		// if this req dont need any role, allowed to pass
		if (!requiredRoles) {
			return true;
		}

		// check the roles from req and roles of this context
		const isMatched: boolean = requiredRoles.includes(user.role);
		if (!isMatched) throw new HttpException('Invalid role', HttpStatus.UNAUTHORIZED);

		return true;
	}
}

import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUserOption = createParamDecorator((data: unknown, context: ExecutionContext) => {
	const ctx = GqlExecutionContext.create(context);

	const { user } = ctx.getContext().req;

	return user;
});

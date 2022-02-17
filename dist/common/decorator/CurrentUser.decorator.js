"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    const { user } = ctx.getContext().req;
    if (user === null)
        throw new common_1.UnauthorizedException('Token Not Found');
    return user;
});
//# sourceMappingURL=CurrentUser.decorator.js.map
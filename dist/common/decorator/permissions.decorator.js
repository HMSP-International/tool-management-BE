"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PERMISSIONS = exports.ROLE = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
const permissions_guard_1 = require("../guard/permissions.guard");
exports.ROLES_KEY = 'permissions';
var ROLE;
(function (ROLE) {
    ROLE["superAdmin"] = "SUPER_ADMIN";
    ROLE["admin"] = "ADMIN";
    ROLE["member"] = "MEMBER";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
const PERMISSIONS = (permissions) => {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.ROLES_KEY, permissions), (0, common_1.UseGuards)(permissions_guard_1.PermissionssGuard));
};
exports.PERMISSIONS = PERMISSIONS;
//# sourceMappingURL=permissions.decorator.js.map
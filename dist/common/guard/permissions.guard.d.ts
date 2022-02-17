import { CanActivate } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PermissionsService } from 'apis/v1/permissions/permissions.service';
export declare class PermissionssGuard implements CanActivate {
    private reflector;
    private readonly permissionsService;
    constructor(reflector: Reflector, permissionsService: PermissionsService);
    canActivate(context: GqlExecutionContext): Promise<boolean>;
}

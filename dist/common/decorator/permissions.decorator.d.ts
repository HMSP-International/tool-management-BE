export declare const ROLES_KEY = "permissions";
export declare enum ROLE {
    superAdmin = "SUPER_ADMIN",
    admin = "ADMIN",
    member = "MEMBER"
}
export interface PERMISSIONS {
    resolverName: string;
}
export declare const PERMISSIONS: (permissions: PERMISSIONS) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

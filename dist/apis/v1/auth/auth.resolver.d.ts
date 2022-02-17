import { AuthService } from './auth.service';
import { SigninInput } from './auth.dto';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    signin(signinInput: SigninInput): Promise<import("../../../helpers/modules/token/token.interface").IToken>;
}

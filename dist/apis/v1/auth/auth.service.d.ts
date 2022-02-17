import { UsersService } from 'apis/v1/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IToken } from 'helpers/modules/token/token.interface';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signin(email: string, password: string): Promise<IToken>;
}

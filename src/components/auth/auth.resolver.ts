import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SigninInput, TestInput } from './auth.dto';
import { Token } from '../token/token.entity';
import { IToken } from '../token/token.interface';
import { User } from '../users/user.entity';

@Resolver(() => Token)
export class AuthResolver {
	constructor (private readonly authService: AuthService) {}

	@Mutation(() => Token)
	signin (@Args('signinInput') signinInput: SigninInput): Promise<IToken> {
		return this.authService.signin(signinInput.email, signinInput.password);
	}
}

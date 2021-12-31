import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SigninInput } from './auth.dto';
import { Token } from 'helpers/modules/token/token.entity';

@Resolver(() => Token)
export class AuthResolver {
	constructor (private readonly authService: AuthService) {}

	@Mutation(() => Token)
	signin (@Args('signinInput') signinInput: SigninInput) {
		return this.authService.signin(signinInput.email, signinInput.password);
	}
}

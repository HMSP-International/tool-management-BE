import { UseGuards } from '@nestjs/common';
// import { IToken } from '../token/token.interface.';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserInput } from './users.dto';
import { IPayLoadToken } from '../token/token.interface';
import { CurrentUser } from '../../common/decorator/CurrentUser.decorator';
import { Roles, ROLE } from '../../common/decorator/role.decorator';

@Resolver(() => User)
export class UsersResolver {
	constructor (private readonly usersService: UsersService) {}

	// ----------------------------------------- Query ----------------------------------------- //
	@Query(() => [ User ])
	async getUsers (): Promise<User[]> {
		return this.usersService.findAll();
	}

	@Query(() => User)
	@Roles(ROLE.admin)
	async getProfile (@CurrentUser() user: IPayLoadToken): Promise<User> {
		return this.usersService.findById(user._id);
	}

	// --------------------------------------- End Query --------------------------------------- //

	// ---------------------------------------- Mutaion ---------------------------------------- //
	@Mutation(() => User)
	async createUser (@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
		return this.usersService.createUser(createUserInput);
	}

	// -------------------------------------- End Mutaion -------------------------------------- //
}

// import { IToken } from '../token/token.interface.';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserInput } from './users.dto';
import { Req } from '@nestjs/common';
import { Request } from 'express';

@Resolver(() => User)
export class UsersResolver {
	constructor (private readonly usersService: UsersService) {}

	// ----------------------------------------- Query ----------------------------------------- //
	@Query(() => [ User ])
	async getUsers (): Promise<User[]> {
		return this.usersService.findAll();
	}

	// @Query(() => User)
	// getUser (@Req() request: Request): Promise<User> {
	// 	console.log(request);

	// 	return this.usersService.findById('12');
	// }

	// --------------------------------------- End Query --------------------------------------- //

	// ---------------------------------------- Mutaion ---------------------------------------- //
	@Mutation(() => User)
	async createUser (@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
		return this.usersService.createUser(createUserInput);
	}

	// -------------------------------------- End Mutaion -------------------------------------- //
}

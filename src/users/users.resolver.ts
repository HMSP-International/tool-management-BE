import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserInput } from './users.dto';

@Resolver(() => User)
export class UsersResolver {
	constructor (private readonly usersService: UsersService) {}

	// ----------------------------------------- Query ----------------------------------------- //
	@Query(() => [ User ])
	async getUsers (): Promise<User[]> {
		return this.usersService.findAll();
	}

	// --------------------------------------- End Query --------------------------------------- //

	// ---------------------------------------- Mutaion ---------------------------------------- //
	@Mutation(() => User)
	async createUser (@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
		return this.usersService.createUser(createUserInput);
	}

	// -------------------------------------- End Mutaion -------------------------------------- //

	// @Query(() => [ User ], { name: 'users' })
	// findAll () {
	// 	return this.usersService.findAll();
	// }

	// @Query(() => User, { name: 'user' })
	// findOne(@Args('id', { type: () => Int }) id: number) {
	//   return this.usersService.findOne(id);
	// }

	// @Mutation(() => User)
	// updateUser (@Args('updateUserInput') updateUserInput: UpdateUserInput) {
	// 	return this.usersService.update(updateUserInput.id, updateUserInput);
	// }

	// @Mutation(() => User)
	// removeUser (
	// 	@Args('id', { type: () => Int })
	// 	id: number,
	// ) {
	// 	return this.usersService.remove(id);
	// }
}

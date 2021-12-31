import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
// services
import { UsersService } from 'apis/v1/users/users.service';
import { SpacesService } from 'apis/v1/spaces/spaces.service';
// classes
import { Space } from 'apis/v1/spaces/classes/space.entity';
import { UserModel } from 'apis/v1/users/classes/user.model';

@Injectable()
export class CollaboratorsResolverFieldService {
	constructor (
		@Inject(forwardRef(() => UsersService))
		private usersService: UsersService,
		private spacesService: SpacesService,
	) {}

	async getSpace (_id: string): Promise<Space> {
		return await this.spacesService.findById(_id);
	}

	async getUser (_id: string): Promise<UserModel> {
		const user = await this.usersService.findById(_id);
		if (user === null) throw new HttpException('_id user not found', HttpStatus.BAD_REQUEST);
		return user;
	}
}

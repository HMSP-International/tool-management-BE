import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// services
import { UsersService } from '../../../users/users.service';
import { SpacesService } from '../../../spaces/spaces.service';
// classes
import { Space } from '../../../spaces/classes/space.entity';
import { User } from '../../../users/classes/user.entity';
import { UserModel } from 'src/apis/v1/users/classes/user.model';

@Injectable()
export class CollaboratorsResolverFieldService {
	constructor (private usersService: UsersService, private spacesService: SpacesService) {}

	async getSpace (_id: string): Promise<Space> {
		return await this.spacesService.findById(_id);
	}

	async getUser (_id: string): Promise<UserModel> {
		const user = await this.usersService.findById(_id);
		if (user === null) throw new HttpException('_id user not found', HttpStatus.BAD_REQUEST);
		return user;
	}
}

import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './users.dto';
import { User, UserDocument } from './user.entity';

@Injectable()
export class UsersService {
	constructor (@InjectModel(User.name) private userEntity: Model<UserDocument>) {}

	async createUser (createUserInput: CreateUserInput): Promise<User> {
		// Hash password
		// const salt = await bcrypt.genSalt();
		// createUserInput.password = await bcrypt.hash(createUserInput.password, salt);
		{
			const user = await this.findByEmail(createUserInput.email);
			if (user) throw new HttpException('Email Already Exists', HttpStatus.CONFLICT);
		}

		// SaveUser
		{
			const user = await new this.userEntity(createUserInput);
			const newUser = await user.save();
			return newUser;
		}
	}

	async findAll (): Promise<User[]> {
		const users = await this.userEntity.find().select('-password');
		if (users.length <= 0) throw new HttpException('Not Found Any User', HttpStatus.NO_CONTENT);
		return users;
	}

	async findByEmail (email: string): Promise<User | null> {
		const user = await this.userEntity.findOne({ email });

		return user;
	}

	// update (id: number, updateUserInput: UpdateUserInput) {
	// 	return `This action updates a #${id} user`;
	// }

	remove (id: number) {
		return `This action removes a #${id} user`;
	}
}

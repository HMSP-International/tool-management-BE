import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './users.dto';
import { User, UserDocument } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { IPayLoadToken, IToken } from '../token/token.interface';

@Injectable()
export class UsersService {
	constructor (
		@InjectModel(User.name) private userEntity: Model<UserDocument>,
		private jwtService: JwtService,
	) {}

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
			newUser.password = null;
			return newUser;
		}
	}

	async findAll (): Promise<User[]> {
		const users = await this.userEntity.find().select('-password');
		if (users.length <= 0) throw new HttpException('Not Found Any User', HttpStatus.NO_CONTENT);
		return users;
	}

	async findById (_id: string, getPassword: Boolean = false): Promise<User | null> {
		if (getPassword === true) {
			return await this.userEntity.findById(_id);
		}
		else {
			return await this.userEntity.findById(_id).select('-password');
		}
	}

	async findByEmail (email: string): Promise<User | null> {
		const user = await this.userEntity.findOne({ email });

		return user;
	}
}

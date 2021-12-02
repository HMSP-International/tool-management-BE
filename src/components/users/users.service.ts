import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './users.dto';
import { User, UserDocument } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as UserDto from './users.dto';

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

	async deleteById (_id: string): Promise<User[]> {
		const user = await this.userEntity.findByIdAndDelete(_id);

		if (user === null)
			throw new NotFoundException(
				'This user not found or maybe deleted, please refresh your page',
			);

		return await this.userEntity.find({});
	}

	async changePassword (
		_id: string,
		changePasswordInput: UserDto.ChangePasswordInput,
	): Promise<User> {
		const user = await this.userEntity.findById(_id);
		if (!user) throw new NotFoundException('This user not found');
		const { newPassword, currentPassword } = changePasswordInput;

		// check password
		const isMatched = await bcrypt.compare(currentPassword, user.password);
		if (!isMatched) {
			throw new NotFoundException('Password Invalid');
		}

		user.password = newPassword;
		return await user.save();
	}

	async changePasswordByAdmin (
		_id: string,
		changePasswordInput: UserDto.ChangePasswordInput,
	): Promise<User> {
		const user = await this.userEntity.findById(_id);
		if (!user) throw new NotFoundException('This user not found');
		const { newPassword, currentPassword } = changePasswordInput;

		// check password
		const isMatched = await bcrypt.compare(currentPassword, user.password);
		if (!isMatched) {
			throw new NotFoundException('Password Invalid');
		}

		user.password = newPassword;
		return await user.save();
	}

	async changeInformation (
		_id: string,
		changeInformationInput: UserDto.ChangeInformationInput,
	): Promise<User> {
		let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInput, {
			new: true,
		});

		if (!user) throw new NotFoundException('This user not found');

		return await user.save();
	}

	async changeInformationByAdmin (
		_id: string,
		changeInformationInputByAdmin: UserDto.ChangeInformationInputByAdmin,
	): Promise<User> {
		delete changeInformationInputByAdmin._id;
		
		const isExistsEmail = await this.userEntity.findOne({
			$and: [ { email: changeInformationInputByAdmin.email }, { _id: { $ne: _id } } ],
		});
		
		if (isExistsEmail) throw new NotFoundException('Email already exists');

		let user = await this.userEntity.findByIdAndUpdate(_id, changeInformationInputByAdmin, {
			new: true,
		});

		if (!user) throw new NotFoundException('This user not found');

		return await user.save();
	}
}

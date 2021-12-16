import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IToken } from '../../../helpers/modules/token/token.interface';

@Injectable()
export class AuthService {
	constructor (private usersService: UsersService, private jwtService: JwtService) {}

	async signin (email: string, password: string): Promise<IToken> {
		const user = await this.usersService.findByEmail(email);

		// check email
		if (!user) throw new NotFoundException('Email or Password Invalid');

		// check password
		const isMatched = await bcrypt.compare(password, user.password);
		if (!isMatched) {
			throw new NotFoundException('Email or Password Invalid');
		}

		return { jwt: this.jwtService.sign({ _id: user._id, role: user.role }) };
	}
}
